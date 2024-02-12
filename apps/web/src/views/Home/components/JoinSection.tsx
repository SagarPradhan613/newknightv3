import styled from 'styled-components'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useAccount } from 'wagmi'

const MainFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 120px;
  background: url(images/footer.png) 0% 0% / cover;
  padding: 10px;
  margin: 250px auto 50px;
  border-radius: 24px;
`

const FooterText = styled.p`
  font-weight: 600;
  font-size: 40px;
  color: white;
`

const JoinSection = () => {
  const { address: account } = useAccount()
  return (
    <>
      <MainFooter>
        <FooterText>Start in seconds.</FooterText>
        {!account && <ConnectWalletButton ml="24px" />}
      </MainFooter>
    </>
  )
}

export default JoinSection
