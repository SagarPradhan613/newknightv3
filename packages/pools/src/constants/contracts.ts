import { ChainId } from '@pancakeswap/chains'
import { Address } from 'viem'

import { SupportedChainId } from './supportedChains'

export type ContractAddresses<T extends ChainId = SupportedChainId> = {
  [chainId in T]: Address
}

export const ICAKE = {
  [ChainId.BSC]: '0x',
  [ChainId.BSC_TESTNET]: '0x5FB0b7a782c2f192493d86922dD3873b6392C8e8',
  [ChainId.ETHEREUM]: '0x',
  [ChainId.ARBITRUM_ONE]: '0x',
  [ChainId.ARBITRUM_GOERLI]: '0x',
  [ChainId.ZKSYNC]: '0x',
  [ChainId.ZKSYNC_TESTNET]: '0x',
  [ChainId.BASE_TESTNET]: '0x',
  [ChainId.LINEA_TESTNET]: '0x',
  [ChainId.POLYGON_ZKEVM_TESTNET]: '0x',
  [ChainId.OPBNB]: '0x',
} as const satisfies ContractAddresses<SupportedChainId>

export const CAKE_VAULT = {
  [ChainId.BSC]: '0xCA775555390bA0C98523FDf3D55BC1127Bd5A4a2',
  [ChainId.BSC_TESTNET]: '0x1088Fb24053F03802F673b84d16AE1A7023E400b',
  [ChainId.ETHEREUM]: '0x',
  [ChainId.ARBITRUM_ONE]: '0x',
  [ChainId.ARBITRUM_GOERLI]: '0x',
  [ChainId.ZKSYNC]: '0x',
  [ChainId.ZKSYNC_TESTNET]: '0x',
  [ChainId.BASE_TESTNET]: '0x',
  [ChainId.LINEA_TESTNET]: '0x',
  [ChainId.POLYGON_ZKEVM_TESTNET]: '0x',
  [ChainId.OPBNB]: '0x',
} as const satisfies ContractAddresses<SupportedChainId>

export const CAKE_FLEXIBLE_SIDE_VAULT = {
  [ChainId.BSC]: '0x3027B948d44A81D491C46ECdEfE6Cda596E05001',
  [ChainId.BSC_TESTNET]: '0x1088Fb24053F03802F673b84d16AE1A7023E400b',
  [ChainId.ETHEREUM]: '0x',
  [ChainId.ARBITRUM_ONE]: '0x',
  [ChainId.ARBITRUM_GOERLI]: '0x',
  [ChainId.ZKSYNC]: '0x',
  [ChainId.ZKSYNC_TESTNET]: '0x',
  [ChainId.BASE_TESTNET]: '0x',
  [ChainId.LINEA_TESTNET]: '0x',
  [ChainId.POLYGON_ZKEVM_TESTNET]: '0x',
  [ChainId.OPBNB]: '0x',
} as const satisfies ContractAddresses<SupportedChainId>
