import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  // ROPSTEN = 3,
  // RINKEBY = 4,
  // GÖRLI = 5,
  // KOVAN = 42,
  // GANACHE = 1337,
  HUDSON =  177888,
  GENEVA = 5167004,
  HARDHAT = 31337,
  WANNSEEMAINNET = 18686
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

const localChainId: ChainId = process.env.REACT_APP_CHAIN_ID ? parseInt(process.env.REACT_APP_CHAIN_ID) : ChainId.WANNSEEMAINNET

const FACTORY_MAP: { [key in ChainId]: string } = {
  [ChainId.MAINNET]: "0x",
  [ChainId.HUDSON]: "0x72208C18A7a04B0E6A5f40898Cc460b94AA5e2a2",
  [ChainId.GENEVA]: '0x39c47d083364b4A23d085c7945Fac9d42457d8C7',
  [ChainId.WANNSEEMAINNET]: "0x8bC7cf83f5F83781Ec85B78d866222987Ae24657",
  [ChainId.HARDHAT]: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
}

export const FACTORY_ADDRESS = FACTORY_MAP[localChainId]

export const INIT_CODE_HASH = '0xc7a644bb44a3c7c0abf3966adb6abdcadf7ef6e38945e8f4281539fc491d4cc9'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
