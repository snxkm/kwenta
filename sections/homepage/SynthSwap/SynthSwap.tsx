// Vendor
import React from 'react';
import { Svg } from 'react-optimized-image';

// Internal
// import CurrencyCard from 'sections/exchange/TradeCard/CurrencyCard/CurrencyCard';
import IconArrowDown from 'assets/svg/app/synthswap/arrow-down.svg';

import useExchange from 'sections/exchange/hooks/useExchange';

import {
	StyledRoot,
	StyledCurrencyCardDivider,
	StyledHorizontalDivider,
	StyledSummaryItems,
	StyledSVGWrapper,
	StyledTradeSummaryContainer,
} from './styles';

import GasPriceSummaryItem from '../../exchange/FooterCard/TradeSummaryCard/GasPriceSummaryItem';
import TotalTradePriceSummaryItem from '../../exchange/FooterCard/TradeSummaryCard/TotalTradePriceSummaryItem';
import FeeRateSummaryItem from '../../exchange/FooterCard/TradeSummaryCard/FeeRateSummaryItem';
import FeeCostSummaryItem from '../../exchange/FooterCard/TradeSummaryCard/FeeCostSummaryItem';
import Button from 'components/Button';

const SynthSwap = () => {
	const {
		// baseCurrencyKey,
		// baseMarketDetailsCard,
		// basePriceChartCard,
		// combinedMarketDetailsCard,
		// combinedPriceChartCard,
		baseCurrencyAmount,
		gasPrices,
		isApproved,
		needsApproval,
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
		synthSwapSummaryItems,
		totalTradePrice,
		transactionFee,
		exchangeFeeRate,
		feeCost,
		// wideWidth,
	} = useExchange({
		footerCardAttached: true,
	});


	/*
 		- i need:
			onSubmit={}
	*/
	function handleSubmit() {
		// my logic
	}

	function handleApprove() {
		// might be able to use current logic in useExchange
	}



	const onSubmit = needsApproval ? (isApproved ? handleSubmit : handleApprove) : handleSubmit;

	return (
		<StyledRoot>
			{synthSwapQuoteCurrencyCard}
			<StyledCurrencyCardDivider>
				<StyledSVGWrapper>
					<Svg src={IconArrowDown} />
				</StyledSVGWrapper>
			</StyledCurrencyCardDivider>
			{synthSwapBaseCurrencyCard}
			<StyledHorizontalDivider />
			<StyledTradeSummaryContainer>
				<StyledSummaryItems>
					<GasPriceSummaryItem gasPrices={gasPrices} transactionFee={transactionFee} />
					<TotalTradePriceSummaryItem
						totalTradePrice={baseCurrencyAmount ? totalTradePrice.toString() : null}
					/>
					<FeeRateSummaryItem feeRate={exchangeFeeRate} />
					<FeeCostSummaryItem feeCost={feeCost} />
				</StyledSummaryItems>
			</StyledTradeSummaryContainer>
			<StyledHorizontalDivider />
			<Button onClick={ } />
		</StyledRoot>
	);
};

export default SynthSwap;
