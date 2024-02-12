import { useTranslation } from '@pancakeswap/localization'
import { Button, Flex, OpenNewIcon, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from '@pancakeswap/widgets-internal'

import Image from 'next/legacy/image'
import { css, styled } from 'styled-components'

import { ASSET_CDN } from 'config/constants/endpoints'

import * as S from './Styled'
import { flyingAnim } from './animations'
import { galxeLogo, galxeTraverseBunny, galxeTraverseCloud } from './images'

const pancakeSwapLogo = `${ASSET_CDN}/web/banners/ethXpancakeswap.png`

const Devider = styled.div`
  background: #ffffff;
  height: 10px;
  width: 1px;
  border-radius: 1px;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: 16px;
  }
`

const RightWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  top: 0;
  overflow: visible;

  > span:nth-child(2) {
    // TradingRewardButter
    position: absolute !important;
    top: -15%;
    right: 3%;

    ${({ theme }) => theme.mediaQueries.sm} {
      top: 5%;
      right: -7%;
    }

    ${({ theme }) => theme.mediaQueries.lg} {
      top: -15%;
      right: 3%;
    }
  }

  > span:nth-child(3) {
    // TradingRewardButter2
    position: absolute !important;
    right: 0;
    top: -24%;
    animation: ${flyingAnim} 2.5s ease-in-out infinite;
    z-index: 2;

    ${({ theme }) => theme.mediaQueries.lg} {
      right: 12%;
    }
  }
`

const Title = styled.div`
  position: relative;
  font-family: 'Kanit';
  font-style: normal;
  line-height: 98%;
  letter-spacing: 0.01em;
  font-feature-settings: 'liga' off;
  background: linear-gradient(166.02deg, #ffb237 -5.1%, #ffeb37 75.24%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 800;

  &::after {
    letter-spacing: 0.01em;
    font-feature-settings: 'liga' off;
    background: linear-gradient(0deg, #832e00, #832e00), linear-gradient(18.74deg, #ffdf37 7.81%, #ffeb37 81.03%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    content: attr(data-text);
    text-shadow: 1.27551px 1.27551px 1.02041px rgba(0, 0, 0, 0.2);
    -webkit-text-stroke: 4px #832e00;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 32px;
    margin-bottom: 4px;
  }
`

const sharedStyle = css`
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);
  padding: 6px 12px;
  border-radius: 8px;
  ${({ theme }) => theme.mediaQueries.sm} {
    border-radius: 16px;
    padding: 12px 24px;
  }
`

const StyledButtonLeft = styled(Button)`
  ${sharedStyle}
  > div {
    color: ${({ theme }) => theme.colors.white};
  }
`

const BGWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: -2px;
  left: 0;
  overflow: hidden;
  border-radius: 32px;
  span {
    // liquidStakingBunnyBg1
    position: absolute !important;
    top: 0px;
    right: 0px;
    max-width: none !important;
    min-width: 300px !important;
    width: 100% !important;
    height: 196px !important;
    ${({ theme }) => theme.mediaQueries.sm} {
      top: -2px;
      right: 0;
      width: 1126px !important;
      height: 194px !important;
    }
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

export const GalxeTraverseBanner = () => {
  const { t } = useTranslation()
  const { isMobile, isDesktop } = useMatchBreakpoints()

  const title = isDesktop ? t('Traverse the Treasure Islands on Galxe') : t('Traverse the Treasure Islands!')

  return (
    // <S.Wrapper
    //   style={{
    //     background:
    //       'linear-gradient(130.14deg, rgba(0, 90, 225, 0.2) 15.11%, rgba(87, 221, 218, 0.2) 82.57%), linear-gradient(249.98deg, #53DEE9 32.16%, #31D0AA 91.27%), linear-gradient(117.08deg, rgba(99, 255, 254, 0.2) 11.95%, rgba(54, 210, 179, 0.2) 96.2%), linear-gradient(182.28deg, rgba(104, 220, 233, 0.8) -44.21%, rgba(104, 220, 233, 0) 87.24%)',
    //   }}
    // >
    //   <S.Inner>
    //     <S.LeftWrapper>
    //       <Flex alignItems="center" style={{ gap: isMobile ? 4 : 12 }} mb="8px">
    //         <Image
    //           src={pancakeSwapLogo}
    //           alt="pancakeSwapLogo"
    //           width={isMobile ? 90 : 132}
    //           height={isMobile ? 13 : 20}
    //           unoptimized
    //         />
    //         <Devider />
    //         <Image src={galxeLogo} alt="galxeLogo" width={isMobile ? 52 : 77} height={isMobile ? 9 : 14} unoptimized />
    //       </Flex>
    //       <Title data-text={title}>{title}</Title>
    //       {!isMobile && (
    //         <Text color="#280D5F" fontSize={24} fontWeight={700} mb="8px">
    //           {t('Claim Your Exclusive NFTs Now!')}
    //         </Text>
    //       )}
    //       <Flex>
    //         <NextLinkFromReactRouter
    //           target="_blank"
    //           to="https://blog.pancakeswap.finance/articles/celebrating-traverse-claim-your-exclusive-nfts"
    //         >
    //           <StyledButtonLeft scale={['xs', 'sm', 'md']}>
    //             <Text bold fontSize={['12px', '16px']} mr="4px">
    //               {t('Get Started')}
    //             </Text>
    //             <OpenNewIcon color="white" />
    //           </StyledButtonLeft>
    //         </NextLinkFromReactRouter>
    //       </Flex>
    //     </S.LeftWrapper>
    //     <RightWrapper>
    //       <BGWrapper>
    //         {isMobile ? (
    //           <Image src="images/bannerbg.png" alt="Background" width={338} height={176} unoptimized />
    //         ) : (
    //           <Image src="images/bannerbg.png" alt="Background" width={1126} height={192} unoptimized />
    //         )}
    //       </BGWrapper>
    //       {isMobile ? (
    //         <Image src={galxeTraverseCloud} alt="Cloud" width={126} height={34} placeholder="blur" />
    //       ) : (
    //         <Image src={galxeTraverseCloud} alt="Cloud" width={208} height={57} placeholder="blur" />
    //       )}
    //       {isMobile ? (
    //         <Image src={galxeTraverseBunny} alt="GalxeTraverseBunny" width={157} height={102} placeholder="blur" />
    //       ) : (
    //         <Image src={galxeTraverseBunny} alt="GalxeTraverseBunny" width={262} height={170} placeholder="blur" />
    //       )}
    //     </RightWrapper>
    //   </S.Inner>
    // </S.Wrapper>

    // <>
    //   <MainBanner>
    //     <BGWrapper>
    //       {isMobile ? (
    //         <Image src="images/bannerbg.png" alt="Background"  unoptimized />
    //       ) : (
    //         <Image src="images/bannerbg.png" alt="Background"  unoptimized />
    //       )}
    //     </BGWrapper>
    //   </MainBanner>
    // </>
    <>
      <MainContainer>
        <LeftContainer>
          <img src="images/tressure.png" alt="img" style={{ width: '450px' }} />
        </LeftContainer>
        <CenterContainer>
          <Heading>Crypto is More Fun And Profitable with Friends</Heading>
          <Para>
            Looking to launch or already have a project on BNB Chain?
            <br />
            Join The Alliance to take arms with other high-quality and reliable projects that both contribute to and
            benefit from Knight Ecosystem.
          </Para>
        </CenterContainer>
        <RightContainer>
          <BannerButton>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSd_8rGEuUBDqtQwNSS7Z1z9k_qtLFLecmHIIkqTZxWoli3jBg/viewform?usp=send_form"
            >
              Join the alliance
            </a>
          </BannerButton>
          <img src="images/coin1.png" alt="img" />
        </RightContainer>
      </MainContainer>

      <MobMainContainer>
        <Heading>Crypto is More Fun And Profitable with Friends</Heading>
        <BannerButton style={{ marginTop: '20px' }}>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSd_8rGEuUBDqtQwNSS7Z1z9k_qtLFLecmHIIkqTZxWoli3jBg/viewform?usp=send_form"
          >
            Join
          </a>
        </BannerButton>
        {/* <div style={{ position: 'absolute', bottom: '10px', right: '0', zIndex: '10' }}>
          <img src="images/coin1.png" alt="img" />
        </div> */}
      </MobMainContainer>
    </>
  )
}
