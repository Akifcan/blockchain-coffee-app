// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount = 0;

    struct TransferStruct {
        address from;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    mapping(address => TransferStruct) public expenses;

    TransferStruct[] transactions;

    function addToBlockchain(
        address payable receiver,
        uint256 amount,
        string memory message,
        string memory keyword
    ) public {
        transactionCount += 1;
        expenses[msg.sender] = TransferStruct(
            msg.sender,
            receiver,
            amount,
            message,
            block.timestamp,
            keyword
        );
        transactions.push(
            TransferStruct(
                msg.sender,
                receiver,
                amount,
                message,
                block.timestamp,
                keyword
            )
        );
    }

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }

    function getSender(address sender)
        public
        view
        returns (TransferStruct memory)
    {
        return expenses[sender];
    }
}
