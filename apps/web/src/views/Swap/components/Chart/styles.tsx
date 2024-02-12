import { Box } from '@pancakeswap/uikit'
import { styled } from 'styled-components'

export const StyledPriceChart = styled(Box)<{
  $isDark: boolean
  $isExpanded: boolean
  $isFullWidthContainer?: boolean
}>`
  border: none;
  border-radius: 32px;
  width: 100%;
  padding-top: 36px;
  background-color: #1e2b45;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 8px;
    background-color: rgba(124, 140, 171, 0.6);
    border: ${({ theme }) => `1px solid ${theme.colors.cardBorder}`};
    border-radius: ${({ $isExpanded }) => ($isExpanded ? '0' : '16px')};
    width: ${({ $isExpanded, $isFullWidthContainer }) => ($isFullWidthContainer || $isExpanded ? '100%' : '50%')};
    height: ${({ $isExpanded }) => ($isExpanded ? '100%' : '516px')};
  }
`

StyledPriceChart.defaultProps = {
  height: '70%',
}
