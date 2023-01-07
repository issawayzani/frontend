"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseV2FeesFactoryInterface__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "childInterfaceAddress",
        outputs: [
            {
                internalType: "address",
                name: "_childInterface",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "childSubImplementationAddress",
        outputs: [
            {
                internalType: "address",
                name: "_childSubImplementation",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "createFees",
        outputs: [
            {
                internalType: "address",
                name: "fees",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "governanceAddress",
        outputs: [
            {
                internalType: "address",
                name: "_governanceAddress",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "interfaceSourceAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_childInterfaceAddress",
                type: "address",
            },
        ],
        name: "updateChildInterfaceAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_childSubImplementationAddress",
                type: "address",
            },
        ],
        name: "updateChildSubImplementationAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class BaseV2FeesFactoryInterface__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.BaseV2FeesFactoryInterface__factory = BaseV2FeesFactoryInterface__factory;
BaseV2FeesFactoryInterface__factory.abi = _abi;
