/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
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
        inputs: [
            {
                internalType: "address",
                name: "_pool",
                type: "address",
            },
        ],
        name: "createFeeDist",
        outputs: [
            {
                internalType: "address",
                name: "lastFeeDist",
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
export class BaseV2FeeDistFactoryInterface__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
BaseV2FeeDistFactoryInterface__factory.abi = _abi;
