import { bscTokens } from '@pancakeswap/tokens'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'

export const vaultPoolConfig = {
  [VaultKey.CakeVaultV1]: {
    name: <Trans>Auto KNIGHT</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 380000n,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.png`,
      secondarySrc: '/images/autorenew.svg',
    },
  },
  [VaultKey.CakeVault]: {
    name: <Trans>Stake KNIGHT</Trans>,
    description: <Trans>This product has been upgraded</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 1100000n,
    tokenImage: {
      primarySrc: `/images/logo.png`,
      secondarySrc: '/images/autorenew-disabled.png',
    },
  },
  [VaultKey.CakeFlexibleSideVault]: {
    name: <Trans>Flexible KNIGHT</Trans>,
    description: <Trans>Reward paused for this position</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000n,
    tokenImage: {
      primarySrc: `/images/logo.png`,
      secondarySrc: '/images/autorenew-disabled.png',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO CAKE',
    description: <Trans>Stake KNIGHT to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 500000n,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.png`,
      secondarySrc: `/images/ifo-pool-icon.svg`,
    },
  },
} as const
