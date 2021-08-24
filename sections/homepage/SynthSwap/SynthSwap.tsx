// Vendor
import React from 'react';

// Internal
// import CurrencyCard from 'sections/exchange/TradeCard/CurrencyCard/CurrencyCard';

import {
	StyledCard,
	StyledCardBody,
	CurrencyWalletBalanceContainer,
} from 'sections/exchange/TradeCard/CurrencyCard/styles';

import useExchange from 'sections/exchange/hooks/useExchange';

const SynthSwap = () => {
  const {
    baseCurrencyCard,
		// baseCurrencyKey,
		// baseMarketDetailsCard,
		// basePriceChartCard,
		// combinedMarketDetailsCard,
		// combinedPriceChartCard,
		footerCard,
		handleCurrencySwap,
		// inverseRate,
		// isShowingSingleChart,
		quoteCurrencyCard,
		// quoteCurrencyKey,
		// quoteMarketDetailsCard,
		// quotePriceChartCard,
		// toggleIsShowingSingleChart,
		wideWidth,

  } = useExchange({
    footerCardAttached: true
  });

	return (
    <div>
      {baseCurrencyCard}
      {quoteCurrencyCard}
      {footerCard}
    </div>
  )
  // return (
	// 	<div>
	// 		<StyledCard>
	// 			<StyledCardBody>
	// 				<CurrencyWalletBalanceContainer>
  //           Hello
  //           <CurrencySelector />
  //         </CurrencyWalletBalanceContainer>
	// 			</StyledCardBody>
	// 		</StyledCard>
	// 		{/* <CurrencyCard interactive side="quote" />
	// 		<CurrencyCard interactive side="base" /> */}
	// 	</div>
	// );
};

export default SynthSwap;
