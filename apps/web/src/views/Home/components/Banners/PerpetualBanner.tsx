import { useTranslation } from '@pancakeswap/localization'
import {
  ArrowForwardIcon,
  Button,
  Link,
  Text,
  useIsomorphicEffect,
  useMatchBreakpoints,
  useModal,
} from '@pancakeswap/uikit'
import USCitizenConfirmModal from 'components/Modal/USCitizenConfirmModal'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { useUserNotUsCitizenAcknowledgement, IdType } from 'hooks/useUserIsUsCitizenAcknowledgement'
import Image from 'next/legacy/image'
import { memo, useMemo, useRef } from 'react'
import { styled, useTheme } from 'styled-components'
import { getPerpetualUrl } from 'utils/getPerpetualUrl'
import { perpetualImage, perpetualMobileImage } from './images'
import * as S from './Styled'

const RightWrapper = styled.div`
  position: absolute;
  min-height: 100%;
  right: 0;
  bottom: 0px;
  ${({ theme }) => theme.mediaQueries.sm} {
    bottom: 8.2px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    bottom: 9px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    bottom: -2px;
  }
`
const Header = styled(S.StyledHeading)`
  font-size: 20px;
  min-height: 44px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 40px;
    min-height: auto;
  }
`
const MainContainer = styled.div`
  height: 100%;
  width: 100%;

  border-radius: 36px;
  background-image: url(images/bannerbg.png);
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    display: none;
  }

  /* Tablets */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    display: none;
  }

  /* Desktops */
  @media only screen and (min-width: 1025px) {
    display: flex;
  }
`
const LeftContainer = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }

  /* Tablets */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    display: none;
  }

  /* Desktops */

  @media only screen and (min-width: 1025px) {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 4rem;
    display: flex;
  }
`

const RightContainer = styled.div`
  display: flex;

  align-items: end;
  justify-content: end;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  /* Tablets */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
  }

  /* Desktops */

  @media only screen and (min-width: 1025px) {
  }
`

const BannerButton = styled.button`
  position: relative;
  z-index: 20;
  -webkit-box-align: center;
  align-items: center;
  border: 0px;
  border-radius: 16px;
  box-shadow: rgba(14, 14, 44, 0.4) 0px -1px 0px 0px inset;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  -webkit-box-pack: center;
  justify-content: center;
  white-space: nowrap;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: 1;
  outline: 0px;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  height: 32px;
  padding: 0px 16px;
  background-color: var(--colors-primary);
  color: var(--colors-white);
  margin-bottom: 40px;
  margin-right: 30px;

  background-color: #ff720d;
  color: white;
`

const CenterContainer = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  justify-content: center;
  width: 80%;
  flex-direction: column;
`

const Heading = styled.div`
  color: #b8cbef;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    text-align: center;
  }

  /* Tablets */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    font-weight: 600;
    font-size: 2opx;
  }

  /* Desktops */

  @media only screen and (min-width: 1025px) {
    font-size: 24px;
    font-weight: 600;
  }
`

const Para = styled.p`
  color: #b8cbef;
  line-height: 25px;
  margin-top: 10px;
  @media only screen and (max-width: 600px) {
    display: none;
  }

  /* Tablets */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    display: none;
  }

  /* Desktops */

  @media only screen and (min-width: 1025px) {
    font-size: 16px;
    font-weight: 400;
  }
`

const MobMainContainer = styled.div`
  justify-content: center;
  position: relative;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 4rem;
  padding-right: 4rem;
  @media only screen and (max-width: 600px) {
    display: flex;
  }

  /* Tablets */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    display: flex;
  }

  /* Desktops */
  @media only screen and (min-width: 1025px) {
    display: none;
  }
`
const HEADING_ONE_LINE_HEIGHT = 27

const PerpetualBanner = () => {
  const {
    t,
    currentLanguage: { code },
  } = useTranslation()
  const { isDesktop, isMobile } = useMatchBreakpoints()
  const { isDark } = useTheme()
  const { chainId } = useActiveChainId()

  const perpetualUrl = useMemo(() => getPerpetualUrl({ chainId, languageCode: code, isDark }), [chainId, code, isDark])
  const headerRef = useRef<HTMLDivElement>(null)
  const [onUSCitizenModalPresent] = useModal(
    <USCitizenConfirmModal title={t('PancakeSwap Perpetuals')} id={IdType.PERPETUALS} />,
    false,
    false,
    'usCitizenConfirmModal',
  )
  const [userNotUsCitizenAcknowledgement] = useUserNotUsCitizenAcknowledgement(IdType.PERPETUALS)

  useIsomorphicEffect(() => {
    const target = headerRef.current
    if (!target || !isMobile) return
    target.style.fontSize = '' // reset
    target.style.lineHeight = ''
    if (target.offsetHeight > HEADING_ONE_LINE_HEIGHT) {
      target.style.fontSize = '18px'
      target.style.lineHeight = `${HEADING_ONE_LINE_HEIGHT}px`
    }
  }, [isMobile, code])

  return (
    // <S.Wrapper>
    //   <S.Inner>
    //     <S.LeftWrapper>
    //       <S.StyledSubheading ref={headerRef}>{t('Perpetual Futures')}</S.StyledSubheading>
    //       <Header width={['160px', '160px', 'auto']}>{t('Up to 1001× Leverage')}</Header>
    //       <Link
    //         href={perpetualUrl}
    //         external
    //         onClick={(e) => {
    //           if (!userNotUsCitizenAcknowledgement) {
    //             e.stopPropagation()
    //             e.preventDefault()
    //             onUSCitizenModalPresent()
    //           }
    //         }}
    //       >
    //         <Button>
    //           <Text color="invertedContrast" bold fontSize="16px" mr="4px">
    //             {t('Trade Now')}
    //           </Text>
    //           <ArrowForwardIcon color="invertedContrast" />
    //         </Button>
    //       </Link>
    //     </S.LeftWrapper>
    //     <RightWrapper>
    //       {isDesktop ? (
    //         <Image src={perpetualImage} alt="PerpetualBanner" width={392} height={232} placeholder="blur" />
    //       ) : (
    //         <Image src={perpetualMobileImage} alt="PerpetualBanner" width={208} height={208} placeholder="blur" />
    //       )}
    //     </RightWrapper>
    //   </S.Inner>
    // </S.Wrapper>
    <>
      <MainContainer>
        <LeftContainer>
          <img src="images/tressure.png" style={{ width: '450px' }} alt="img" />
        </LeftContainer>
        <CenterContainer>
          <Heading>Tired of Pushing Buttons ?</Heading>
          <Para>
            Streamline your earnings by using KnightSwap Castle vaults to automatically compound your investments over
            time.
          </Para>
        </CenterContainer>
        <RightContainer>
          <BannerButton>
            <a rel="noreferrer" target="_blank" href="https://www.knightcompounder.com/#/bsc">
              Earn on Autopilot
            </a>
          </BannerButton>
          <img src="images/coin1.png" alt="img" />
        </RightContainer>
      </MainContainer>

      <MobMainContainer>
        <Heading>Tired of Pushing Buttons ?</Heading>
        <BannerButton style={{ marginTop: '20px' }}>
          <a rel="noreferrer" target="_blank" href="https://www.knightcompounder.com/#/bsc">
            Earn
          </a>
        </BannerButton>
        {/* <div style={{ position: "absolute",bottom:"-10px",right:"0",zIndex:"10" }}>
          <img src='images/coin1.png'></img>
        </div> */}
      </MobMainContainer>
    </>
  )
}

export default memo(PerpetualBanner)
