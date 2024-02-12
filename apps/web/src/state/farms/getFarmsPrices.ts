import { ChainId } from '@pancakeswap/chains'

export const nativeStableLpMap = {
  [ChainId.ETHEREUM]: {
    address: '0x2E8135bE71230c6B1B4045696d41C09Db0414226',
    wNative: 'WETH',
    stable: 'USDC',
  },
  [ChainId.GOERLI]: {
    address: '0xf5bf0C34d3c428A74Ceb98d27d38d0036C587200',
    wNative: 'WETH',
    stable: 'tUSDC',
  },
  [ChainId.BSC]: {
    address: '0x28f8ED3Bb8795b11e9be8A6015aDd73ef7Cd3a14',
    wNative: 'WBNB',
    stable: 'BUSD',
  },
  [ChainId.BSC_TESTNET]: {
    address: '0x4E96D2e92680Ca65D58A0e2eB5bd1c0f44cAB897',
    wNative: 'WBNB',
    stable: 'BUSD',
  },
}
