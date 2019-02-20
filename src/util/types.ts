import { BigNumber, OrderStatus } from '0x.js';
import { SignedOrder } from '@0x/connect';
import { RouterState } from 'connected-react-router';

export interface TabItem {
    onClick: any;
    active: boolean;
    text: string;
}

export enum Tab {
    Open,
    Filled,
}

export interface Token {
    address: string;
    symbol: string;
    decimals: number;
}

export interface TokenBalance {
    token: Token;
    balance: BigNumber;
    isUnlocked: boolean;
}

export enum Web3State {
    Loading,
    Done,
    Error,
}

export interface BlockchainState {
    readonly ethAccount: string;
    readonly web3State: Web3State;
    readonly tokenBalances: TokenBalance[];
    readonly ethBalance: BigNumber;
    readonly wethBalance: BigNumber;
}

export interface RelayerState {
    readonly orders: UIOrder[];
    readonly userOrders: UIOrder[];
    readonly selectedToken: Token | null;
}

export interface StoreState {
    readonly router: RouterState;
    readonly blockchain: BlockchainState;
    readonly relayer: RelayerState;
}

export enum UIOrderSide {
    Sell,
    Buy,
}

export interface UIOrder {
    rawOrder: SignedOrder;
    side: UIOrderSide;
    size: BigNumber;
    filled: BigNumber;
    price: BigNumber;
    status: OrderStatus;
    emptySize: BigNumber;
}

export interface OrderBookItem {
    side: UIOrderSide;
    size: BigNumber;
    price: BigNumber;
    emptySize: BigNumber;
}

export interface OrderBook {
    buyOrders: OrderBookItem[];
    sellOrders: OrderBookItem[];
    spread: BigNumber;
}
