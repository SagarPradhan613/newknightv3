import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | KnightSwap',
  defaultTitle: 'Game | KnightSwap',
  description: 'Play different games on KnightSwap, using CAKE and KnightSwap NFTs',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@KnightSwap',
    site: '@KnightSwap',
  },
  openGraph: {
    title: '🥞 KnightSwap - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description: 'Play different games on KnightSwap, using CAKE and KnightSwap NFTs',
    images: [{ url: 'https://assets.KnightSwap.finance/web/og/v2/hero.jpg' }],
  },
}
