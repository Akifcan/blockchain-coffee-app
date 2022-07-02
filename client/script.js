import { ethers } from './ethers.js'

const coffeeList = [
    {
        name: 'Chai Tea Latte',
        price: 20
    },
    {
        name: 'White Chocolate Mocha',
        price: 10
    },
    {
        name: 'Cappuccino',
        price: 20
    },
    {
        name: 'Latte',
        price: 20
    },
    {
        name: 'Turkish Coffee',
        price: 20
    },
    {
        name: 'Cold Brew',
        price: 20
    },
]

const drinks_el = document.querySelector('.drinks')
const liquid_el = document.querySelector('.liquid')
const handle_el = document.querySelector('.handle')
const orderListEl = document.querySelector('.order-list')
const orderButtonEl = document.querySelector('.order-button')

// This local from hardhat
const storeWalletAddress = '0xbAC9AE3d4Fcd323722bb88a06272247bC00418b6'

//rinkeby
// const storeWalletAddress = '0xbAC9AE3d4Fcd323722bb88a06272247bC00418b6'

const basket = []

function convertToEth(price) {
    const mockEthPrice = 0.0000569
    return price * mockEthPrice
}

Array.prototype.totalPrice = function () {
    return this.reduce((total, item) => total += item.total, 0)
}

function addToBasket(drink) {
    const current = basket.find(item => item.product.name === drink.name)
    if (current) {
        current.quantity++
        current.total = current.quantity * current.product.price
    } else {
        basket.push({ product: drink, quantity: 1, total: drink.price })
    }
    orderListEl.innerHTML = basket.map(item => {
        return `
            <li>${item.product.name} - <b>Quantity: ${item.quantity}</b> - Total: ${convertToEth(item.product.price * item.quantity)}Ξ</li>
        `
    }).join('')

    orderButtonEl.textContent = `Order Now ☕☕☕ ${convertToEth(basket.totalPrice())} ETH`
}

function listDrinks() {
    drinks_el.innerHTML = coffeeList.map((coffee, index) => {
        return `
        <div class="menu-item">
            <h3>${coffee.name}</h3>
            <p title="${coffee.price}₺">${convertToEth(coffee.price)}ETHΞ</p>
            <button data-index="${index}">Add to basket</button>
        </div>
    `
    }).join('')

    document.querySelector('.drinks').addEventListener('click', e => {
        if (e.target.tagName === 'BUTTON') {
            addToBasket(coffeeList[e.target.dataset.index]);
            liquid_el.classList.add('prepare')
            handle_el.classList.add('prepare')
            liquid_el.addEventListener('animationend', _ => liquid_el.classList.remove('prepare'), { once: true })
            handle_el.addEventListener('animationend', _ => handle_el.classList.remove('prepare'), { once: true })
        }
    })
}

orderButtonEl.addEventListener('click', async _ => {
    if (!basket.length) {
        return alert('Please add items to basket')
    }
    if (!window.ethereum) {
        return alert('Please install metamask')
    }
    const accounts = await window.ethereum
        .request({ method: 'eth_requestAccounts' })
    const amount = ethers.utils.parseEther(convertToEth(basket.totalPrice()).toString())
    window.ethereum
        .request({
            method: 'eth_sendTransaction',
            params: [
                {
                    from: accounts[0],
                    to: storeWalletAddress,
                    gas: '0x76c0', // 30400
                    gasPrice: '0x9184e72a000', // 10000000000000
                    value: amount._hex, // 2441406250
                    data:
                        '0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675',
                }
            ],
        }).then(pay => {
            alert('your order received')
            alert("Your transaction is" + pay)
        }).catch(_ => {
            alert('please try order again')
        })


})

listDrinks()
