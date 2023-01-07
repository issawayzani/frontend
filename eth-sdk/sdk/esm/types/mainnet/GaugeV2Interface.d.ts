import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface GaugeV2InterfaceInterface extends utils.Interface {
    functions: {
        "_ve()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "batchEarned(address,address,uint256)": FunctionFragment;
        "batchRewardPerToken(address,uint256)": FunctionFragment;
        "bribe()": FunctionFragment;
        "checkpoints(address,uint256)": FunctionFragment;
        "claimFees()": FunctionFragment;
        "deposit(uint256,uint256)": FunctionFragment;
        "depositAll(uint256)": FunctionFragment;
        "derivedBalance(address)": FunctionFragment;
        "derivedBalances(address)": FunctionFragment;
        "derivedSupply()": FunctionFragment;
        "earned(address,address)": FunctionFragment;
        "factoryAddress()": FunctionFragment;
        "fees0()": FunctionFragment;
        "fees1()": FunctionFragment;
        "getPriorBalanceIndex(address,uint256)": FunctionFragment;
        "getPriorRewardPerToken(address,uint256)": FunctionFragment;
        "getPriorSupplyIndex(uint256)": FunctionFragment;
        "getReward(address,address[])": FunctionFragment;
        "governanceAddress()": FunctionFragment;
        "initialize(address,address,address,address)": FunctionFragment;
        "isReward(address)": FunctionFragment;
        "lastEarn(address,address)": FunctionFragment;
        "lastTimeRewardApplicable(address)": FunctionFragment;
        "lastUpdateTime(address)": FunctionFragment;
        "left(address)": FunctionFragment;
        "notifyRewardAmount(address,uint256)": FunctionFragment;
        "numCheckpoints(address)": FunctionFragment;
        "periodFinish(address)": FunctionFragment;
        "rewardPerToken(address)": FunctionFragment;
        "rewardPerTokenCheckpoints(address,uint256)": FunctionFragment;
        "rewardPerTokenNumCheckpoints(address)": FunctionFragment;
        "rewardPerTokenStored(address)": FunctionFragment;
        "rewardRate(address)": FunctionFragment;
        "rewards(uint256)": FunctionFragment;
        "rewardsListLength()": FunctionFragment;
        "stake()": FunctionFragment;
        "supplyCheckpoints(uint256)": FunctionFragment;
        "supplyNumCheckpoints()": FunctionFragment;
        "tokenIds(address)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "userEarnedStored(address,address)": FunctionFragment;
        "userRewardPerTokenStored(address,address)": FunctionFragment;
        "voter()": FunctionFragment;
        "withdraw(uint256)": FunctionFragment;
        "withdrawAll()": FunctionFragment;
        "withdrawToken(uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_ve" | "balanceOf" | "batchEarned" | "batchRewardPerToken" | "bribe" | "checkpoints" | "claimFees" | "deposit" | "depositAll" | "derivedBalance" | "derivedBalances" | "derivedSupply" | "earned" | "factoryAddress" | "fees0" | "fees1" | "getPriorBalanceIndex" | "getPriorRewardPerToken" | "getPriorSupplyIndex" | "getReward" | "governanceAddress" | "initialize" | "isReward" | "lastEarn" | "lastTimeRewardApplicable" | "lastUpdateTime" | "left" | "notifyRewardAmount" | "numCheckpoints" | "periodFinish" | "rewardPerToken" | "rewardPerTokenCheckpoints" | "rewardPerTokenNumCheckpoints" | "rewardPerTokenStored" | "rewardRate" | "rewards" | "rewardsListLength" | "stake" | "supplyCheckpoints" | "supplyNumCheckpoints" | "tokenIds" | "totalSupply" | "userEarnedStored" | "userRewardPerTokenStored" | "voter" | "withdraw" | "withdrawAll" | "withdrawToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "_ve", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "batchEarned", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "batchRewardPerToken", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "bribe", values?: undefined): string;
    encodeFunctionData(functionFragment: "checkpoints", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "claimFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "depositAll", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "derivedBalance", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "derivedBalances", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "derivedSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "earned", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "factoryAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "fees0", values?: undefined): string;
    encodeFunctionData(functionFragment: "fees1", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPriorBalanceIndex", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPriorRewardPerToken", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPriorSupplyIndex", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getReward", values: [PromiseOrValue<string>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "governanceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "isReward", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "lastEarn", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "lastTimeRewardApplicable", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "lastUpdateTime", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "left", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "notifyRewardAmount", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "numCheckpoints", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "periodFinish", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "rewardPerToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "rewardPerTokenCheckpoints", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "rewardPerTokenNumCheckpoints", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "rewardPerTokenStored", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "rewardRate", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "rewards", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "rewardsListLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "stake", values?: undefined): string;
    encodeFunctionData(functionFragment: "supplyCheckpoints", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "supplyNumCheckpoints", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenIds", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "userEarnedStored", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "userRewardPerTokenStored", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "voter", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdrawAll", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawToken", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "_ve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchEarned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchRewardPerToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bribe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkpoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "derivedBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "derivedBalances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "derivedSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factoryAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fees0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fees1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriorBalanceIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriorRewardPerToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriorSupplyIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governanceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastEarn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastTimeRewardApplicable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastUpdateTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "left", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "notifyRewardAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numCheckpoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodFinish", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardPerToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardPerTokenCheckpoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardPerTokenNumCheckpoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardPerTokenStored", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsListLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supplyCheckpoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supplyNumCheckpoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userEarnedStored", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userRewardPerTokenStored", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "voter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawToken", data: BytesLike): Result;
    events: {
        "ClaimFees(address,uint256,uint256)": EventFragment;
        "ClaimRewards(address,address,uint256)": EventFragment;
        "Deposit(address,uint256,uint256)": EventFragment;
        "NotifyReward(address,address,uint256)": EventFragment;
        "Withdraw(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ClaimFees"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimRewards"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NotifyReward"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
export interface ClaimFeesEventObject {
    from: string;
    claimed0: BigNumber;
    claimed1: BigNumber;
}
export type ClaimFeesEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], ClaimFeesEventObject>;
export type ClaimFeesEventFilter = TypedEventFilter<ClaimFeesEvent>;
export interface ClaimRewardsEventObject {
    from: string;
    reward: string;
    amount: BigNumber;
}
export type ClaimRewardsEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ClaimRewardsEventObject>;
export type ClaimRewardsEventFilter = TypedEventFilter<ClaimRewardsEvent>;
export interface DepositEventObject {
    from: string;
    tokenId: BigNumber;
    amount: BigNumber;
}
export type DepositEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], DepositEventObject>;
export type DepositEventFilter = TypedEventFilter<DepositEvent>;
export interface NotifyRewardEventObject {
    from: string;
    reward: string;
    amount: BigNumber;
}
export type NotifyRewardEvent = TypedEvent<[
    string,
    string,
    BigNumber
], NotifyRewardEventObject>;
export type NotifyRewardEventFilter = TypedEventFilter<NotifyRewardEvent>;
export interface WithdrawEventObject {
    from: string;
    tokenId: BigNumber;
    amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], WithdrawEventObject>;
export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface GaugeV2Interface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GaugeV2InterfaceInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        _ve(overrides?: CallOverrides): Promise<[string]>;
        balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        batchEarned(token: PromiseOrValue<string>, account: PromiseOrValue<string>, runs: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        batchRewardPerToken(token: PromiseOrValue<string>, maxEndIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        bribe(overrides?: CallOverrides): Promise<[string]>;
        checkpoints(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            timestamp: BigNumber;
            balanceOf: BigNumber;
        }>;
        claimFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deposit(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositAll(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        derivedBalance(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        derivedBalances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        derivedSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        earned(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        factoryAddress(overrides?: CallOverrides): Promise<[string] & {
            _factory: string;
        }>;
        fees0(overrides?: CallOverrides): Promise<[BigNumber]>;
        fees1(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPriorBalanceIndex(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPriorRewardPerToken(token: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getPriorSupplyIndex(timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getReward(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        governanceAddress(overrides?: CallOverrides): Promise<[string] & {
            _governanceAddress: string;
        }>;
        initialize(_stake: PromiseOrValue<string>, _bribe: PromiseOrValue<string>, __ve: PromiseOrValue<string>, _voter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isReward(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        lastEarn(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        lastTimeRewardApplicable(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        lastUpdateTime(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        left(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        notifyRewardAmount(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        numCheckpoints(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        periodFinish(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardPerToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardPerTokenCheckpoints(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            timestamp: BigNumber;
            rewardPerToken: BigNumber;
        }>;
        rewardPerTokenNumCheckpoints(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardPerTokenStored(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardRate(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        rewards(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        rewardsListLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        stake(overrides?: CallOverrides): Promise<[string]>;
        supplyCheckpoints(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            timestamp: BigNumber;
            supply: BigNumber;
        }>;
        supplyNumCheckpoints(overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenIds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        userEarnedStored(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        userRewardPerTokenStored(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        voter(overrides?: CallOverrides): Promise<[string]>;
        withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawAll(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawToken(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    _ve(overrides?: CallOverrides): Promise<string>;
    balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    batchEarned(token: PromiseOrValue<string>, account: PromiseOrValue<string>, runs: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    batchRewardPerToken(token: PromiseOrValue<string>, maxEndIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    bribe(overrides?: CallOverrides): Promise<string>;
    checkpoints(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        timestamp: BigNumber;
        balanceOf: BigNumber;
    }>;
    claimFees(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deposit(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositAll(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    derivedBalance(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    derivedBalances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    derivedSupply(overrides?: CallOverrides): Promise<BigNumber>;
    earned(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    factoryAddress(overrides?: CallOverrides): Promise<string>;
    fees0(overrides?: CallOverrides): Promise<BigNumber>;
    fees1(overrides?: CallOverrides): Promise<BigNumber>;
    getPriorBalanceIndex(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getPriorRewardPerToken(token: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    getPriorSupplyIndex(timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getReward(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    governanceAddress(overrides?: CallOverrides): Promise<string>;
    initialize(_stake: PromiseOrValue<string>, _bribe: PromiseOrValue<string>, __ve: PromiseOrValue<string>, _voter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isReward(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    lastEarn(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    lastTimeRewardApplicable(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    lastUpdateTime(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    left(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    notifyRewardAmount(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    numCheckpoints(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    periodFinish(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    rewardPerToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    rewardPerTokenCheckpoints(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        timestamp: BigNumber;
        rewardPerToken: BigNumber;
    }>;
    rewardPerTokenNumCheckpoints(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    rewardPerTokenStored(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    rewardRate(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    rewards(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    rewardsListLength(overrides?: CallOverrides): Promise<BigNumber>;
    stake(overrides?: CallOverrides): Promise<string>;
    supplyCheckpoints(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        timestamp: BigNumber;
        supply: BigNumber;
    }>;
    supplyNumCheckpoints(overrides?: CallOverrides): Promise<BigNumber>;
    tokenIds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    userEarnedStored(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    userRewardPerTokenStored(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    voter(overrides?: CallOverrides): Promise<string>;
    withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawAll(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawToken(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _ve(overrides?: CallOverrides): Promise<string>;
        balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        batchEarned(token: PromiseOrValue<string>, account: PromiseOrValue<string>, runs: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        batchRewardPerToken(token: PromiseOrValue<string>, maxEndIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        bribe(overrides?: CallOverrides): Promise<string>;
        checkpoints(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            timestamp: BigNumber;
            balanceOf: BigNumber;
        }>;
        claimFees(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            claimed0: BigNumber;
            claimed1: BigNumber;
        }>;
        deposit(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        depositAll(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        derivedBalance(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        derivedBalances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        derivedSupply(overrides?: CallOverrides): Promise<BigNumber>;
        earned(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        factoryAddress(overrides?: CallOverrides): Promise<string>;
        fees0(overrides?: CallOverrides): Promise<BigNumber>;
        fees1(overrides?: CallOverrides): Promise<BigNumber>;
        getPriorBalanceIndex(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPriorRewardPerToken(token: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getPriorSupplyIndex(timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getReward(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        governanceAddress(overrides?: CallOverrides): Promise<string>;
        initialize(_stake: PromiseOrValue<string>, _bribe: PromiseOrValue<string>, __ve: PromiseOrValue<string>, _voter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isReward(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        lastEarn(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lastTimeRewardApplicable(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lastUpdateTime(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        left(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        notifyRewardAmount(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        numCheckpoints(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        periodFinish(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerTokenCheckpoints(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            timestamp: BigNumber;
            rewardPerToken: BigNumber;
        }>;
        rewardPerTokenNumCheckpoints(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerTokenStored(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardRate(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewards(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        rewardsListLength(overrides?: CallOverrides): Promise<BigNumber>;
        stake(overrides?: CallOverrides): Promise<string>;
        supplyCheckpoints(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            timestamp: BigNumber;
            supply: BigNumber;
        }>;
        supplyNumCheckpoints(overrides?: CallOverrides): Promise<BigNumber>;
        tokenIds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        userEarnedStored(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        userRewardPerTokenStored(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        voter(overrides?: CallOverrides): Promise<string>;
        withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawAll(overrides?: CallOverrides): Promise<void>;
        withdrawToken(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ClaimFees(address,uint256,uint256)"(from?: PromiseOrValue<string> | null, claimed0?: null, claimed1?: null): ClaimFeesEventFilter;
        ClaimFees(from?: PromiseOrValue<string> | null, claimed0?: null, claimed1?: null): ClaimFeesEventFilter;
        "ClaimRewards(address,address,uint256)"(from?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, amount?: null): ClaimRewardsEventFilter;
        ClaimRewards(from?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, amount?: null): ClaimRewardsEventFilter;
        "Deposit(address,uint256,uint256)"(from?: PromiseOrValue<string> | null, tokenId?: null, amount?: null): DepositEventFilter;
        Deposit(from?: PromiseOrValue<string> | null, tokenId?: null, amount?: null): DepositEventFilter;
        "NotifyReward(address,address,uint256)"(from?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, amount?: null): NotifyRewardEventFilter;
        NotifyReward(from?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, amount?: null): NotifyRewardEventFilter;
        "Withdraw(address,uint256,uint256)"(from?: PromiseOrValue<string> | null, tokenId?: null, amount?: null): WithdrawEventFilter;
        Withdraw(from?: PromiseOrValue<string> | null, tokenId?: null, amount?: null): WithdrawEventFilter;
    };
    estimateGas: {
        _ve(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        batchEarned(token: PromiseOrValue<string>, account: PromiseOrValue<string>, runs: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        batchRewardPerToken(token: PromiseOrValue<string>, maxEndIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        bribe(overrides?: CallOverrides): Promise<BigNumber>;
        checkpoints(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        claimFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deposit(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositAll(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        derivedBalance(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        derivedBalances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        derivedSupply(overrides?: CallOverrides): Promise<BigNumber>;
        earned(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        factoryAddress(overrides?: CallOverrides): Promise<BigNumber>;
        fees0(overrides?: CallOverrides): Promise<BigNumber>;
        fees1(overrides?: CallOverrides): Promise<BigNumber>;
        getPriorBalanceIndex(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPriorRewardPerToken(token: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPriorSupplyIndex(timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getReward(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        governanceAddress(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_stake: PromiseOrValue<string>, _bribe: PromiseOrValue<string>, __ve: PromiseOrValue<string>, _voter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isReward(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lastEarn(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lastTimeRewardApplicable(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lastUpdateTime(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        left(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        notifyRewardAmount(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        numCheckpoints(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        periodFinish(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerTokenCheckpoints(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerTokenNumCheckpoints(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerTokenStored(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardRate(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewards(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardsListLength(overrides?: CallOverrides): Promise<BigNumber>;
        stake(overrides?: CallOverrides): Promise<BigNumber>;
        supplyCheckpoints(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        supplyNumCheckpoints(overrides?: CallOverrides): Promise<BigNumber>;
        tokenIds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        userEarnedStored(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        userRewardPerTokenStored(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        voter(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawAll(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawToken(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _ve(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        batchEarned(token: PromiseOrValue<string>, account: PromiseOrValue<string>, runs: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        batchRewardPerToken(token: PromiseOrValue<string>, maxEndIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        bribe(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkpoints(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deposit(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositAll(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        derivedBalance(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        derivedBalances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        derivedSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        earned(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factoryAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fees0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fees1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPriorBalanceIndex(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPriorRewardPerToken(token: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPriorSupplyIndex(timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReward(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        governanceAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_stake: PromiseOrValue<string>, _bribe: PromiseOrValue<string>, __ve: PromiseOrValue<string>, _voter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isReward(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastEarn(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastTimeRewardApplicable(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastUpdateTime(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        left(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        notifyRewardAmount(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        numCheckpoints(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodFinish(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardPerToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardPerTokenCheckpoints(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardPerTokenNumCheckpoints(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardPerTokenStored(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardRate(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewards(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardsListLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stake(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supplyCheckpoints(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supplyNumCheckpoints(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenIds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userEarnedStored(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userRewardPerTokenStored(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        voter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAll(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawToken(amount: PromiseOrValue<BigNumberish>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
