import { useTranslation } from '@pancakeswap/localization'
import { Button, Flex, Link, OpenNewIcon, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'
import { styled } from 'styled-components'
import CakeDataRow from './CakeDataRow'

const PaddingContainer = styled.div`
  @media only screen and (max-width: 600px) {
    // padding-left: 1rem;
    // padding-right: 1rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  /* Tablets */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    // padding-left: 8rem;
    // padding-right: 8rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  /* Desktops */
  @media only screen and (min-width: 1025px) {
    // padding-left: 10rem;
    // padding-right: 10rem;
    margin-top: 10rem;
  }
`
const TopContainer = styled.div`
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

const TopLeft = styled.div`
  @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
  }

  /* Tablets */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }

  /* Desktops */
  @media only screen and (min-width: 1025px) {
    width: 50%;
    padding-left: 4rem;
  }
`
const TopRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 5rem;
  }

  /* Tablets */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    width: 100%;
    margin-top: 5rem;
  }

  /* Desktops */
  @media only screen and (min-width: 1025px) {
    width: 50%;
  }
`

const BottomContainer = styled.div`
  margin-top: 4rem;
`

const ParaText = styled.p`
  color: #b8cbef;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 24px;
  margin-bottom: 24px;
  font-size: 18px;
`

const ForthSection = () => {
  const { theme } = useTheme()
  const { t } = useTranslation()
  const { isMobile, isXs, isMd } = useMatchBreakpoints()
  return (
    <>
      <PaddingContainer>
        <TopContainer>
          <TopLeft>
            <Text>
              <Text
                fontWeight={600}
                display="block"
                color={theme.isDark ? '#FF720D' : theme.colors.primary}
                fontSize={['48px', null, '64px']}
                lineHeight="110%"
              >
                {t('Knight is')}
              </Text>
              <Text fontSize={['48px', null, '64px']} display="inline" fontWeight={600} lineHeight="110%">
                {t(' protecting  the  crypto  space  ! ')}
              </Text>
            </Text>
            <Flex>
              <ParaText>
                {t(
                  'Knight token is at the heart of the KnightSwap ecosystem. Buy it, win it, farm it, spend it, stake it',
                )}
              </ParaText>
            </Flex>
            <Flex justifyContent={isMobile || isMd ? 'center' : 'start'} style={{ gap: 14 }}>
              <Link href="https://knightv3-web-hr31.vercel.app/swap?outputCurrency=0xD23811058Eb6e7967D9a00dc3886E75610c4AbBa&chainId=56">
                <Button variant="primary">{t('Buy Knight')}</Button>
              </Link>
              <Link href="https://knights.gitbook.io/knightswap/">
                <Button variant="primary">{t('Learn')}</Button>
              </Link>
            </Flex>
          </TopLeft>
          <TopRight>
            <img style={{ width: '250px' }} src="images/darknightani.gif" alt="img" />
          </TopRight>
        </TopContainer>
        <BottomContainer>
          <CakeDataRow />
        </BottomContainer>
      </PaddingContainer>
    </>
  )
}

export default ForthSection
