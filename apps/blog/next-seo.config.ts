import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | KnightSwap',
  defaultTitle: 'Blog | KnightSwap',
  description:
    'KnightSwap is the preeminent decentralized exchange (DEX) on Binance Smart Chain (BSC)  built for reliable & sustainable yields while providing the highest quality Decentralized Finance (DeFi) experience',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@PancakeSwap',
    site: '@PancakeSwap',
  },
  openGraph: {
    title: '🥞 PancakeSwap - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description:
      'KnightSwap is the preeminent decentralized exchange (DEX) on Binance Smart Chain (BSC)  built for reliable & sustainable yields while providing the highest quality Decentralized Finance (DeFi) experience',
    // images: [{ url: 'https://assets.pancakeswap.finance/web/og/v2/hero.jpg' }],
  },
}
