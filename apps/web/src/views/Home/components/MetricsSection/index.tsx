import { useTranslation } from '@pancakeswap/localization'
import { Flex, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useQuery } from '@tanstack/react-query'
import { ASSET_CDN } from 'config/constants/endpoints'
import Image from 'next/legacy/image'
import { styled } from 'styled-components'
import { ChainTags } from './ChainTags'
import { MetricsCard } from './MetricsCard'

const ImageLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;
  display: none;
  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
  }
`
// const BnbBallRocket = styled.div`
//   position: absolute;
//   left: -65px;
//   ${({ theme }) => theme.mediaQueries.xxl} {
//     bottom: 151px;
//     left: 20px;
//   }
// `
// const EthBallRocket = styled.div`
//   position: absolute;
//   right: 0;
//   top: 81px;
//   ${({ theme }) => theme.mediaQueries.xxl} {
//     right: 0;
//     bottom: -30px;
//   }
// `

// const AptosBallRocket = styled.div`
//   position: absolute;
//   top: 0px;
//   right: 98px;
//   ${({ theme }) => theme.mediaQueries.xxl} {
//     top: 72px;
//     right: 119px;
//   }
// `
const MainSecondContainer = styled.div`
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
  }
`
const UserMainBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(91.59deg, rgb(25, 41, 73) 4.59%, rgb(49, 71, 115) 87.26%);
  border-radius: 36px;
  margin: 100px auto;

  @media only screen and (max-width: 600px) {
    padding: 3rem 3rem;
  }

  /* Tablets */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    padding: 3rem 3rem;
  }

  /* Desktops */
  @media only screen and (min-width: 1025px) {
    padding: 2rem 5rem;
    padding-bottom: 8rem;
  }
`
const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 1rem;
`

const HeadingLine1 = styled.div`
  color: #b8cbef;
  font-weight: 600;
  @media only screen and (max-width: 600px) {
    font-size: 48px;
  }

  /* Tablets */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 56px;
  }

  /* Desktops */
  @media only screen and (min-width: 1025px) {
    font-size: 64px;
  }
`

const MetricCardBox = styled.div`
  box-sizing: border-box;
  border-radius: 24px;
  background: rgb(30, 43, 69);
  padding: 14px;
  flex: 1;
  flex-direction: column;
  min-width: 270px;
  flex-shrink: 0;
  text-align: center;
  border: 1px solid rgb(255, 114, 13);
  height: 250px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`

const CardContainers = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 600px) {
    gap: 32px;
    margin-bottom: 32px;
  }

  /* Tablets */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    gap: 32px;
    margin-bottom: 32px;
  }

  /* Desktops */
  @media only screen and (min-width: 1025px) {
    gap: 20px;
  }
`
const Stats = () => {
  const { t } = useTranslation()
  const { data: tvl = 0 } = useQuery<number>(['tvl'], { enabled: false })
  const { data: txCount = 0 } = useQuery<number>(['totalTx30Days'], { enabled: false })
  const { data: addressCount = 0 } = useQuery<number>(['addressCount30Days'], { enabled: false })
  const { isMobile, isSm, isMd, isXxl } = useMatchBreakpoints()

  return (
    <MainSecondContainer>
      <UserMainBox>
        <Flex justifyContent="center" alignItems="center" flexDirection="column" overflow="hidden">
          <div style={{ marginBottom: '1rem' }}>
            <svg width="83" height="118" viewBox="0 0 83 118" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34.8862 116.999L31.5285 58.4582C31.5285 58.4582 14.696 55.8425 17.3954 40.5756L35.7878 47.8397L37.6299 69.0157L41.8007 70.4929L46.3365 69.1379L48.0513 47.7175L66.9361 40.4534C66.9361 40.4534 70.2495 55.3482 52.7089 58.5527L49.3623 116.649L57.8256 111.979C57.8256 111.979 62.2841 88.9143 82.9887 81.6113C80.1123 42.5693 80.9586 12.8852 42.116 0.00634766C42.116 0.00634766 16.7648 3.50513 6.47052 33.0115C6.47052 33.0115 0.717683 63.2955 0.999793 81.2836C0.999793 81.2836 22.2466 89.8695 26.1684 112.04L34.8751 117.005L34.8862 116.999Z"
                fill="#C7C7C7"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.4156 95.0622L17.6996 79.762C17.6996 79.762 9.68434 82.3333 6.52581 74.7804L4.49573 60.6409L4.00342 79.0067C4.00342 79.0067 15.5036 85.6877 20.4156 95.0622V95.0622Z"
                fill="#C7C7C7"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M66.0568 79.762L63.3408 95.0622C68.2529 85.6877 79.753 79.0067 79.753 79.0067L79.2607 60.6409L77.2306 74.7804C74.0721 82.3333 66.0568 79.762 66.0568 79.762V79.762Z"
                fill="#C7C7C7"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M56.3651 61.1129C56.3651 61.1129 60.3202 58.5582 65.4037 54.8762C70.4872 51.1886 66.9415 40.459 66.9415 40.459C66.9415 40.459 70.2549 55.3538 52.7143 58.5582L49.3677 116.655L50.8557 115.833L56.3651 61.1185V61.1129Z"
                fill="#C7C7C7"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34.8863 116.999L31.5287 58.4584C31.5287 58.4584 14.6961 55.8426 17.3955 40.5757C17.3955 40.5757 13.7779 44.4854 17.8602 53.8044C17.8602 53.8044 21.4834 59.3969 27.7949 60.8908L33.3873 116.144L34.8808 116.999H34.8863Z"
                fill="#C7C7C7"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.1567 33.1392C12.1567 33.1392 17.3454 24.1257 28.7846 22.9983C40.2184 21.8709 41.4796 16.2396 41.2694 13.8404C41.0592 11.4468 38.3211 6.0209 31.8713 8.20348C25.4159 10.386 12.7652 21.2045 12.1567 33.1337V33.1392Z"
                fill="#C7C7C7"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.3475 27.2192C20.4987 27.5802 17.5283 30.8846 17.5283 30.8846C17.5283 30.8846 17.2074 30.8846 18.8946 31.9342C20.5817 32.9838 23.5079 30.1626 24.1108 29.635C24.7138 29.113 26.1962 26.8526 23.3475 27.2192Z"
                fill="#C7C7C7"
              />
            </svg>
          </div>
          <HeadingContainer>
            <HeadingLine1>
              Used by <span style={{ color: '#FF720D' }}>Thousands</span>
            </HeadingLine1>
            <HeadingLine1>
              Trusted with <span style={{ color: '#FF720D', marginLeft: 'px' }}>Millions</span>{' '}
            </HeadingLine1>
          </HeadingContainer>
          <Text
            width={isMobile || isMd ? '100%' : '60%'}
            textAlign="center"
            mb="4px"
            fontSize={isMobile ? '18px' : '18px'}
          >
            {t(
              'KnightSwap is your preeminent DeFi platform on BNB Chain, designed to ensure safe and sustainable yield farming for a community of discerning investors.',
            )}
          </Text>
          <Text
            color="#ff720d"
            textAlign="center"
            lineHeight="110%"
            fontWeight={400}
            fontSize={isMobile ? '16px' : '16px'}
            mb={isMobile ? '32px' : '48px'}
          >
            {t('Are you ready to join the swelling tide?')}
          </Text>
          {/* <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection={isMobile ? 'column' : 'row'}
            width={['100%', '100%', '100%', '800px']}
            style={{ gap: isMobile ? 32 : 20,flexWrap:"wrap" }}
            mb={isMobile ? '32px' : '0px'}
            flexWrap="wrap"
          >
            <MetricCardBox>
              <MetricsCard
                width={isSm || isMd ? '100%' : 'auto'}
                title={t('Total Users:')}
                value={addressCount}
                description={t('in the last 30 days')}
              />
            </MetricCardBox>
            <MetricCardBox>
              <MetricsCard title={t('Total Trades:')} value={txCount} description={t('in the last 30 days')} />
            </MetricCardBox>
            <MetricCardBox>
              <MetricsCard
                title={t('Total Value Locked:')}
                value={tvl}
                description={t('in the last 30 days')}
                prefix="$"
              />
            </MetricCardBox>
          </Flex> */}
          <CardContainers>
            <MetricCardBox>
              <div style={{ marginBottom: '1rem' }}>
                <img src="images/profile1.png" alt="img" />
              </div>

              <MetricsCard
                width={isSm || isMd ? '100%' : 'auto'}
                title={t('Users')}
                value={addressCount}
                newStringValue={t('40 thousands')}
                description={t('in the last 30 days')}
              />
            </MetricCardBox>
            <MetricCardBox>
              <div style={{ marginBottom: '1rem' }}>
                <img src="images/profile2.png" alt="img" />
              </div>
              <MetricsCard
                title={t('Trades')}
                value={txCount}
                newStringValue={t('1 million')}
                description={t('in the last 30 days')}
              />
            </MetricCardBox>
            <MetricCardBox>
              <div style={{ marginBottom: '1rem' }}>
                <img src="images/profile3.png" alt="img" />
              </div>
              <MetricsCard
                title={t('Staked')}
                newStringValue={t('$10 million')}
                value={tvl}
                description={t('in the last 30 days')}
                prefix="$"
              />
            </MetricCardBox>
          </CardContainers>
          {/* <ChainTags /> */}
          {/* <ImageLayer>
            <BnbBallRocket>
              <Image
                src={`${ASSET_CDN}/web/landing/bnb-ball-rocket.png`}
                alt="bnbBallRocket"
                width={144}
                height={168}
                unoptimized
              />
            </BnbBallRocket>
            <EthBallRocket>
              <Image
                src={`${ASSET_CDN}/web/landing/eth-ball-rocket.png`}
                alt="ethBallRocket"
                width={isXxl ? 116 : 70}
                height={isXxl ? 230 : 140}
                unoptimized
              />
            </EthBallRocket>
            <AptosBallRocket>
              <Image
                src={`${ASSET_CDN}/web/landing/aptos-ball-rocket.png`}
                alt="aptosBallRocket"
                width={isXxl ? 84 : 53}
                height={isXxl ? 101 : 64}
                unoptimized
              />
            </AptosBallRocket>
          </ImageLayer> */}
        </Flex>
      </UserMainBox>
    </MainSecondContainer>
  )
}

export default Stats
