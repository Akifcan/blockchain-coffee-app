const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
    it("Transaction Count Should greater than 0", async function () {
        const Transaction = await ethers.getContractFactory("Transactions")
        const transaction = await Transaction.deploy()
        await transaction.addToBlockchain("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", 1, "keyword", "message")
        await transaction.deployed()
        console.log(await transaction.getTransactionCount());
        expect(parseInt((await transaction.getTransactionCount()).toString())).to.greaterThan(0)
    })
})
