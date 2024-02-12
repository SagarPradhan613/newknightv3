import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | KnightSwap',
  defaultTitle: 'KnightSwap',
  description:
    'KnightSwap is the preeminent decentralized exchange (DEX) on Binance Smart Chain (BSC)  built for reliable & sustainable yields while providing the highest quality Decentralized Finance (DeFi) experience',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@KnightSwap',
    site: '@KnightSwap',
  },
  openGraph: {
    title: '🥞 KnightSwap - The most popular DeFi exchange on BSC, now on Aptos',
    description:
      'KnightSwap is the preeminent decentralized exchange (DEX) on Binance Smart Chain (BSC)  built for reliable & sustainable yields while providing the highest quality Decentralized Finance (DeFi) experience',
    // images: [{ url: 'https://aptos.pancakeswap.finance/images/hero.jpeg' }],
  },
}
