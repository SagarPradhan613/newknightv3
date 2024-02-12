import { useTranslation } from '@pancakeswap/localization'
import { Button, Flex, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from '@pancakeswap/widgets-internal'

import ConnectWalletButton from 'components/ConnectWalletButton'
import { ASSET_CDN } from 'config/constants/endpoints'
import useTheme from 'hooks/useTheme'
import { useLayoutEffect, useRef } from 'react'
import { styled } from 'styled-components'
import { useAccount } from 'wagmi'
import { useDrawCanvas } from '../hooks/useDrawCanvas'
import { useDrawSequenceImages } from '../hooks/useDrawSequence'
import { checkIsIOS, useIsIOS } from '../hooks/useIsIOS'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'

const MainThirdContainer = styled.div`
  @media only screen and (max-width: 600px) {
    // padding-left: 1rem;
    // padding-right: 1rem;
  }

  /* Tablets */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    // padding-left: 8rem;
    // padding-right: 8rem;
  }

  /* Desktops */
  @media only screen and (min-width: 1025px) {
    // padding-left: 10rem;
    // padding-right: 10rem;
    margin-top: -5rem;
  }
`

const ThirdFlex = styled.div`
  display: flex;
  @media only screen and (max-width: 600px) {
    display: block;
  }

  /* Tablets */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    display: block;
  }

  /* Desktops */
  @media only screen and (min-width: 1025px) {
    display: flex;
  }
`

const ThirdLeft = styled.div`
  display: flex;
  justify-content: center;
  // align-items:center;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  /* Tablets */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    width: 100%;
  }

  /* Desktops */
  @media only screen and (min-width: 1025px) {
    width: 50%;
    padding-left: 4rem;
  }
`

const ThirdRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  /* Tablets */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    width: 100%;
  }

  /* Desktops */
  @media only screen and (min-width: 1025px) {
    width: 50%;
  }
`
const HeadContainer = styled.div`
  @media only screen and (max-width: 600px) {
    font-size: 48px;
    text-align: center;
  }

  /* Tablets */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 48px;
    text-align: center;
  }

  /* Desktops */
  @media only screen and (min-width: 1025px) {
    font-size: 64px;
  }
`

const ColorHead = styled.p`
  color: rgb(255, 114, 13);
  font-weight: 600;
`
const SecHead = styled.p`
  color: #b8cbef;
  font-weight: 600;
`

const Para = styled.p`
  color: #b8cbef;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 24px;
  margin-bottom: 24px;
  font-size: 18px;

  @media only screen and (max-width: 600px) {
    text-align: center;
  }

  /* Tablets */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    text-align: center;
  }

  /* Desktops */
  @media only screen and (min-width: 1025px) {
  }
`
const ThirdSection = () => {
  const { t } = useTranslation()
  const { address: account } = useAccount()
  const { theme } = useTheme()
  const { isMobile, isXs, isMd } = useMatchBreakpoints()

  return (
    <>
      <MainThirdContainer>
        <ThirdFlex>
          <ThirdLeft>
            <HeadContainer>
              <ColorHead>Trade boutique</ColorHead>
              <SecHead>No registration,</SecHead>
              <SecHead>No hassle,</SecHead>
            </HeadContainer>
            <Para>Trade exclusive tokens found only on KnightSwap in seconds, just by connecting your wallet!</Para>
            <Flex justifyContent={isMobile || isMd ? 'center' : 'start'}>
              {!account && <ConnectWalletButton style={{ borderRadius: isXs ? 12 : undefined }} scale="md" mr="8px" />}
              <NextLinkFromReactRouter to="/swap">
                <Button
                  scale="md"
                  style={{ borderRadius: isXs ? 12 : undefined, backgroundColor: '#FF720D', color: 'white' }}
                  variant={!account ? 'secondary' : 'primary'}
                >
                  {t('Trade Now')}
                </Button>
              </NextLinkFromReactRouter>
            </Flex>
          </ThirdLeft>
          <ThirdRight>
            <img src="images/floating-coin.gif" alt="img" />
          </ThirdRight>
        </ThirdFlex>
      </MainThirdContainer>
    </>
  )
}

export default ThirdSection
