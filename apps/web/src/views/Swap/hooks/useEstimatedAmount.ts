import { CurrencyAmount } from '@pancakeswap/sdk'
import { useDeferredValue } from 'react'
import { useQuery } from '@tanstack/react-query'

export function useEstimatedAmount({ estimatedCurrency, stableSwapConfig, quotient, stableSwapContract }) {
  const deferQuotient = useDeferredValue(quotient)

  return useQuery(
    ['swapContract', stableSwapConfig?.stableSwapAddress, deferQuotient],
    async () => {
      const isToken0 = stableSwapConfig?.token0?.address === estimatedCurrency?.address

      const args = isToken0 ? [1, 0, deferQuotient] : [0, 1, deferQuotient]

      const estimatedAmount = await stableSwapContract.read.get_dy(args)

      return CurrencyAmount.fromRawAmount(estimatedCurrency, estimatedAmount)
    },
    {
      enabled: Boolean(stableSwapConfig?.stableSwapAddress && estimatedCurrency && !!deferQuotient),
      keepPreviousData: true,
    },
  )
}
