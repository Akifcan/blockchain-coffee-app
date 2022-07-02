import { ethers } from './ethers.js'
const abi = {
    "_format": "hh-sol-artifact-1",
    "contractName": "Transactions",
    "sourceName": "contracts/Transaction.sol",
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "message",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "keyword",
                    "type": "string"
                }
            ],
            "name": "addToBlockchain",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "expenses",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "message",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "keyword",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getAllTransactions",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "message",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "keyword",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct Transactions.TransferStruct[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "getSender",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "message",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "keyword",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct Transactions.TransferStruct",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getTransactionCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "bytecode": "0x60806040526000805534801561001457600080fd5b506112ab806100246000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806303fba0ce1461005c57806327506f531461008c5780632e7700f0146100aa578063cc2d7ead146100c8578063d9757764146100e4575b600080fd5b61007660048036038101906100719190610bd2565b610119565b6040516100839190610f76565b60405180910390f35b610094610356565b6040516100a19190610f54565b60405180910390f35b6100b2610599565b6040516100bf9190610f98565b60405180910390f35b6100e260048036038101906100dd9190610bfb565b6105a2565b005b6100fe60048036038101906100f99190610bd2565b61089a565b60405161011096959493929190610ee5565b60405180910390f35b610121610a26565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201805461023190611160565b80601f016020809104026020016040519081016040528092919081815260200182805461025d90611160565b80156102aa5780601f1061027f576101008083540402835291602001916102aa565b820191906000526020600020905b81548152906001019060200180831161028d57829003601f168201915b50505050508152602001600482015481526020016005820180546102cd90611160565b80601f01602080910402602001604051908101604052809291908181526020018280546102f990611160565b80156103465780601f1061031b57610100808354040283529160200191610346565b820191906000526020600020905b81548152906001019060200180831161032957829003601f168201915b5050505050815250509050919050565b60606002805480602002602001604051908101604052809291908181526020016000905b8282101561059057838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201805461046390611160565b80601f016020809104026020016040519081016040528092919081815260200182805461048f90611160565b80156104dc5780601f106104b1576101008083540402835291602001916104dc565b820191906000526020600020905b8154815290600101906020018083116104bf57829003601f168201915b50505050508152602001600482015481526020016005820180546104ff90611160565b80601f016020809104026020016040519081016040528092919081815260200182805461052b90611160565b80156105785780601f1061054d57610100808354040283529160200191610578565b820191906000526020600020905b81548152906001019060200180831161055b57829003601f168201915b5050505050815250508152602001906001019061037a565b50505050905090565b60008054905090565b60016000808282546105b4919061107a565b925050819055506040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200142815260200182815250600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003019080519060200190610707929190610a88565b506080820151816004015560a082015181600501908051906020019061072e929190610a88565b5090505060026040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301908051906020019061086a929190610a88565b506080820151816004015560a0820151816005019080519060200190610891929190610a88565b50505050505050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600201549080600301805461090f90611160565b80601f016020809104026020016040519081016040528092919081815260200182805461093b90611160565b80156109885780601f1061095d57610100808354040283529160200191610988565b820191906000526020600020905b81548152906001019060200180831161096b57829003601f168201915b5050505050908060040154908060050180546109a390611160565b80601f01602080910402602001604051908101604052809291908181526020018280546109cf90611160565b8015610a1c5780601f106109f157610100808354040283529160200191610a1c565b820191906000526020600020905b8154815290600101906020018083116109ff57829003601f168201915b5050505050905086565b6040518060c00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016060815260200160008152602001606081525090565b828054610a9490611160565b90600052602060002090601f016020900481019282610ab65760008555610afd565b82601f10610acf57805160ff1916838001178555610afd565b82800160010185558215610afd579182015b82811115610afc578251825591602001919060010190610ae1565b5b509050610b0a9190610b0e565b5090565b5b80821115610b27576000816000905550600101610b0f565b5090565b6000610b3e610b3984610fe4565b610fb3565b905082815260208101848484011115610b5657600080fd5b610b6184828561111e565b509392505050565b600081359050610b7881611230565b92915050565b600081359050610b8d81611247565b92915050565b600082601f830112610ba457600080fd5b8135610bb4848260208601610b2b565b91505092915050565b600081359050610bcc8161125e565b92915050565b600060208284031215610be457600080fd5b6000610bf284828501610b69565b91505092915050565b60008060008060808587031215610c1157600080fd5b6000610c1f87828801610b7e565b9450506020610c3087828801610bbd565b935050604085013567ffffffffffffffff811115610c4d57600080fd5b610c5987828801610b93565b925050606085013567ffffffffffffffff811115610c7657600080fd5b610c8287828801610b93565b91505092959194509250565b6000610c9a8383610da7565b905092915050565b610cab816110d0565b82525050565b610cba816110d0565b82525050565b6000610ccb82611024565b610cd58185611047565b935083602082028501610ce785611014565b8060005b85811015610d235784840389528151610d048582610c8e565b9450610d0f8361103a565b925060208a01995050600181019050610ceb565b50829750879550505050505092915050565b6000610d408261102f565b610d4a8185611058565b9350610d5a81856020860161112d565b610d638161121f565b840191505092915050565b6000610d798261102f565b610d838185611069565b9350610d9381856020860161112d565b610d9c8161121f565b840191505092915050565b600060c083016000830151610dbf6000860182610ca2565b506020830151610dd26020860182610ca2565b506040830151610de56040860182610ec7565b5060608301518482036060860152610dfd8282610d35565b9150506080830151610e126080860182610ec7565b5060a083015184820360a0860152610e2a8282610d35565b9150508091505092915050565b600060c083016000830151610e4f6000860182610ca2565b506020830151610e626020860182610ca2565b506040830151610e756040860182610ec7565b5060608301518482036060860152610e8d8282610d35565b9150506080830151610ea26080860182610ec7565b5060a083015184820360a0860152610eba8282610d35565b9150508091505092915050565b610ed081611114565b82525050565b610edf81611114565b82525050565b600060c082019050610efa6000830189610cb1565b610f076020830188610cb1565b610f146040830187610ed6565b8181036060830152610f268186610d6e565b9050610f356080830185610ed6565b81810360a0830152610f478184610d6e565b9050979650505050505050565b60006020820190508181036000830152610f6e8184610cc0565b905092915050565b60006020820190508181036000830152610f908184610e37565b905092915050565b6000602082019050610fad6000830184610ed6565b92915050565b6000604051905081810181811067ffffffffffffffff82111715610fda57610fd96111f0565b5b8060405250919050565b600067ffffffffffffffff821115610fff57610ffe6111f0565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600061108582611114565b915061109083611114565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156110c5576110c4611192565b5b828201905092915050565b60006110db826110f4565b9050919050565b60006110ed826110f4565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561114b578082015181840152602081019050611130565b8381111561115a576000848401525b50505050565b6000600282049050600182168061117857607f821691505b6020821081141561118c5761118b6111c1565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b611239816110d0565b811461124457600080fd5b50565b611250816110e2565b811461125b57600080fd5b50565b61126781611114565b811461127257600080fd5b5056fea2646970667358221220c41e8c70280bc8d86e91ed6b8f896b7f71b0cf3fa082f62f5b8e22b21a4de9db64736f6c63430008000033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100575760003560e01c806303fba0ce1461005c57806327506f531461008c5780632e7700f0146100aa578063cc2d7ead146100c8578063d9757764146100e4575b600080fd5b61007660048036038101906100719190610bd2565b610119565b6040516100839190610f76565b60405180910390f35b610094610356565b6040516100a19190610f54565b60405180910390f35b6100b2610599565b6040516100bf9190610f98565b60405180910390f35b6100e260048036038101906100dd9190610bfb565b6105a2565b005b6100fe60048036038101906100f99190610bd2565b61089a565b60405161011096959493929190610ee5565b60405180910390f35b610121610a26565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201805461023190611160565b80601f016020809104026020016040519081016040528092919081815260200182805461025d90611160565b80156102aa5780601f1061027f576101008083540402835291602001916102aa565b820191906000526020600020905b81548152906001019060200180831161028d57829003601f168201915b50505050508152602001600482015481526020016005820180546102cd90611160565b80601f01602080910402602001604051908101604052809291908181526020018280546102f990611160565b80156103465780601f1061031b57610100808354040283529160200191610346565b820191906000526020600020905b81548152906001019060200180831161032957829003601f168201915b5050505050815250509050919050565b60606002805480602002602001604051908101604052809291908181526020016000905b8282101561059057838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201805461046390611160565b80601f016020809104026020016040519081016040528092919081815260200182805461048f90611160565b80156104dc5780601f106104b1576101008083540402835291602001916104dc565b820191906000526020600020905b8154815290600101906020018083116104bf57829003601f168201915b50505050508152602001600482015481526020016005820180546104ff90611160565b80601f016020809104026020016040519081016040528092919081815260200182805461052b90611160565b80156105785780601f1061054d57610100808354040283529160200191610578565b820191906000526020600020905b81548152906001019060200180831161055b57829003601f168201915b5050505050815250508152602001906001019061037a565b50505050905090565b60008054905090565b60016000808282546105b4919061107a565b925050819055506040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200142815260200182815250600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003019080519060200190610707929190610a88565b506080820151816004015560a082015181600501908051906020019061072e929190610a88565b5090505060026040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301908051906020019061086a929190610a88565b506080820151816004015560a0820151816005019080519060200190610891929190610a88565b50505050505050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600201549080600301805461090f90611160565b80601f016020809104026020016040519081016040528092919081815260200182805461093b90611160565b80156109885780601f1061095d57610100808354040283529160200191610988565b820191906000526020600020905b81548152906001019060200180831161096b57829003601f168201915b5050505050908060040154908060050180546109a390611160565b80601f01602080910402602001604051908101604052809291908181526020018280546109cf90611160565b8015610a1c5780601f106109f157610100808354040283529160200191610a1c565b820191906000526020600020905b8154815290600101906020018083116109ff57829003601f168201915b5050505050905086565b6040518060c00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016060815260200160008152602001606081525090565b828054610a9490611160565b90600052602060002090601f016020900481019282610ab65760008555610afd565b82601f10610acf57805160ff1916838001178555610afd565b82800160010185558215610afd579182015b82811115610afc578251825591602001919060010190610ae1565b5b509050610b0a9190610b0e565b5090565b5b80821115610b27576000816000905550600101610b0f565b5090565b6000610b3e610b3984610fe4565b610fb3565b905082815260208101848484011115610b5657600080fd5b610b6184828561111e565b509392505050565b600081359050610b7881611230565b92915050565b600081359050610b8d81611247565b92915050565b600082601f830112610ba457600080fd5b8135610bb4848260208601610b2b565b91505092915050565b600081359050610bcc8161125e565b92915050565b600060208284031215610be457600080fd5b6000610bf284828501610b69565b91505092915050565b60008060008060808587031215610c1157600080fd5b6000610c1f87828801610b7e565b9450506020610c3087828801610bbd565b935050604085013567ffffffffffffffff811115610c4d57600080fd5b610c5987828801610b93565b925050606085013567ffffffffffffffff811115610c7657600080fd5b610c8287828801610b93565b91505092959194509250565b6000610c9a8383610da7565b905092915050565b610cab816110d0565b82525050565b610cba816110d0565b82525050565b6000610ccb82611024565b610cd58185611047565b935083602082028501610ce785611014565b8060005b85811015610d235784840389528151610d048582610c8e565b9450610d0f8361103a565b925060208a01995050600181019050610ceb565b50829750879550505050505092915050565b6000610d408261102f565b610d4a8185611058565b9350610d5a81856020860161112d565b610d638161121f565b840191505092915050565b6000610d798261102f565b610d838185611069565b9350610d9381856020860161112d565b610d9c8161121f565b840191505092915050565b600060c083016000830151610dbf6000860182610ca2565b506020830151610dd26020860182610ca2565b506040830151610de56040860182610ec7565b5060608301518482036060860152610dfd8282610d35565b9150506080830151610e126080860182610ec7565b5060a083015184820360a0860152610e2a8282610d35565b9150508091505092915050565b600060c083016000830151610e4f6000860182610ca2565b506020830151610e626020860182610ca2565b506040830151610e756040860182610ec7565b5060608301518482036060860152610e8d8282610d35565b9150506080830151610ea26080860182610ec7565b5060a083015184820360a0860152610eba8282610d35565b9150508091505092915050565b610ed081611114565b82525050565b610edf81611114565b82525050565b600060c082019050610efa6000830189610cb1565b610f076020830188610cb1565b610f146040830187610ed6565b8181036060830152610f268186610d6e565b9050610f356080830185610ed6565b81810360a0830152610f478184610d6e565b9050979650505050505050565b60006020820190508181036000830152610f6e8184610cc0565b905092915050565b60006020820190508181036000830152610f908184610e37565b905092915050565b6000602082019050610fad6000830184610ed6565b92915050565b6000604051905081810181811067ffffffffffffffff82111715610fda57610fd96111f0565b5b8060405250919050565b600067ffffffffffffffff821115610fff57610ffe6111f0565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600061108582611114565b915061109083611114565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156110c5576110c4611192565b5b828201905092915050565b60006110db826110f4565b9050919050565b60006110ed826110f4565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561114b578082015181840152602081019050611130565b8381111561115a576000848401525b50505050565b6000600282049050600182168061117857607f821691505b6020821081141561118c5761118b6111c1565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b611239816110d0565b811461124457600080fd5b50565b611250816110e2565b811461125b57600080fd5b50565b61126781611114565b811461127257600080fd5b5056fea2646970667358221220c41e8c70280bc8d86e91ed6b8f896b7f71b0cf3fa082f62f5b8e22b21a4de9db64736f6c63430008000033",
    "linkReferences": {},
    "deployedLinkReferences": {}
}

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

async function connectContract(address, amount) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const transactionContract = new ethers.Contract("0x5FbDB2315678afecb367f032d93F642f64180aa3", abi.abi, signer)
    const hash = await transactionContract.addToBlockchain(address, amount, JSON.stringify(basket), 'key,word')
    await hash.wait()
    console.log(document.title = `Star Chain - Total Order ${(await transactionContract.getTransactionCount()).toString()}`);
}

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
    const amount = ethers.utils.parseEther(convertToEth(basket.totalPrice()).toFixed(6).toString())
    console.log(amount._hex);
    window.ethereum
        .request({
            method: 'eth_sendTransaction',
            params: [
                {
                    from: accounts[0],
                    to: storeWalletAddress,
                    gas: '0x76c0', // 30400
                    gasPrice: '0x9184e72a000', // 10000000000000
                    value: amount._hex, // 
                }
            ],
        }).then(pay => {
            alert('your order received')
            alert("Your transaction is" + pay)
            connectContract(accounts[0], amount)
        }).catch(_ => {
            alert('please try order again')
        })


})

listDrinks()
