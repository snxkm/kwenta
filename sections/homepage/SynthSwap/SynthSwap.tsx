// Vendor
import React from 'react';
import { Svg } from 'react-optimized-image';

// Internal
// import CurrencyCard from 'sections/exchange/TradeCard/CurrencyCard/CurrencyCard';
import IconArrowDown from 'assets/svg/app/synthswap/arrow-down.svg';

import useExchange from 'sections/exchange/hooks/useExchange';

import { StyledRoot, StyledHorizontalDivider, StyledSVGWrapper } from './styles';

const SynthSwap = () => {
	const {
		// baseCurrencyKey,
		// baseMarketDetailsCard,
		// basePriceChartCard,
		// combinedMarketDetailsCard,
		// combinedPriceChartCard,
		footerCard,
		// handleCurrencySwap,
		// inverseRate,
		// isShowingSingleChart,
		// quoteCurrencyCard,
		// quoteCurrencyKey,
		// quoteMarketDetailsCard,
		// quotePriceChartCard,
		// toggleIsShowingSingleChart,
		synthSwapBaseCurrencyCard,
		synthSwapQuoteCurrencyCard,
		// wideWidth,
	} = useExchange({
		footerCardAttached: true,
	});

	return (
		<StyledRoot>
			{synthSwapQuoteCurrencyCard}
			<StyledHorizontalDivider>
				<StyledSVGWrapper>
					<Svg src={IconArrowDown} />
				</StyledSVGWrapper>
			</StyledHorizontalDivider>
			{synthSwapBaseCurrencyCard}
			{footerCard}
		</StyledRoot>
	);
};

export default SynthSwap;
