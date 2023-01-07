import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Sdafasdf, SdafasdfInterface } from "../../mainnet/Sdafasdf";
export declare class Sdafasdf__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "childInterfaceAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "_childInterface";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "childSubImplementationAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "_childSubImplementation";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_pair";
            readonly type: "address";
        }];
        readonly name: "createFees";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "fees";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "governanceAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "_governanceAddress";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "interfaceSourceAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_childInterfaceAddress";
            readonly type: "address";
        }];
        readonly name: "updateChildInterfaceAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_childSubImplementationAddress";
            readonly type: "address";
        }];
        readonly name: "updateChildSubImplementationAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SdafasdfInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Sdafasdf;
}
