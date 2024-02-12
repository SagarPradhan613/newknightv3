import styled from 'styled-components'

const MainContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
`

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const FlexContainer = styled.div`
  margin-top: 4rem;
  gap: 2rem;
  display: flex;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  /* Tablets */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    flex-direction: column;
  }

  /* Desktops */
  @media only screen and (min-width: 1025px) {
    flex-direction: row;
  }
`

const ToolCard = styled.div`
  // align-items:center;
  text-align: center;

  height: fit-content;
  width: 100%;
  max-width: 248px;
  box-sizing: border-box;
  border-radius: 24px;
  background: rgb(30, 43, 69);
  padding: 24px;
  border: 1px solid rgb(255, 114, 13);
  min-height: 254px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 10px auto;
`

const ToolHead = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: rgb(255, 114, 13);
`
const ToolPara = styled.p`
  margin-top: 10px;
  color: #b8cbef;
  font-weight: 400;
  line-height: 1.5;
  font-size: 16px;
`
const Heading = styled.p`
  font-weight: 600;
  color: #b8cbef;
  @media only screen and (max-width: 600px) {
    font-size: 48px;
  }

  /* Tablets */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 48px;
  }

  /* Desktops */
  @media only screen and (min-width: 1025px) {
    font-size: 64px;
  }
`
const Toolcards = () => {
  return (
    <>
      <MainContainer>
        <HeadingContainer>
          <Heading>Providing Tools for Reliable and Sustainable Yields</Heading>
        </HeadingContainer>

        <FlexContainer>
          <ToolCard>
            <div style={{ minHeight: '165px', marginTop: '10px' }}>
              <ToolHead>Trade</ToolHead>
              <ToolPara>
                Enjoy the highest liquidity trades and lowest fees with no registration needed. No hassle, and more
                money for you.
              </ToolPara>
            </div>
          </ToolCard>

          <ToolCard>
            <div style={{ minHeight: '165px', marginTop: '10px' }}>
              <ToolHead>Farms</ToolHead>
              <ToolPara>
                Provide KNIGHT LP tokens or NFTs to our farms and start earning $KNIGHT tokens along with trading fees.
              </ToolPara>
            </div>
          </ToolCard>

          <ToolCard>
            <div style={{ minHeight: '165px', marginTop: '10px' }}>
              <ToolHead>Castle</ToolHead>
              <ToolPara>
                Stake your assets in KnightSwap Castle vaults to earn on autopilot. Your assets will compound
                automatically daily!
              </ToolPara>
            </div>
          </ToolCard>

          <ToolCard>
            <div style={{ minHeight: '165px', marginTop: '10px' }}>
              <ToolHead>Raids</ToolHead>
              <ToolPara>Stake your $KNIGHT tokens to earn $KNIGHT or partner tokens in Raids.</ToolPara>
            </div>
          </ToolCard>
        </FlexContainer>
      </MainContainer>
    </>
  )
}

export default Toolcards
