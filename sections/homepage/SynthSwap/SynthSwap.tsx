// Vendor
import React from 'react';
import { Svg } from 'react-optimized-image';

// Internal
// import CurrencyCard from 'sections/exchange/TradeCard/CurrencyCard/CurrencyCard';
import IconArrowDown from 'assets/svg/app/synthswap/arrow-down.svg';

import useExchange from 'sections/exchange/hooks/useExchange';

import {
	StyledRoot,
	StyledButton,
	StyledCurrencyCardDivider,
	StyledHorizontalDivider,
	StyledSummaryItems,
	StyledSVGButton,
	StyledTradeSummaryContainer,
} from './styles';

import GasPriceSummaryItem from '../../exchange/FooterCard/TradeSummaryCard/GasPriceSummaryItem';
import TotalTradePriceSummaryItem from '../../exchange/FooterCard/TradeSummaryCard/TotalTradePriceSummaryItem';
import FeeRateSummaryItem from '../../exchange/FooterCard/TradeSummaryCard/FeeRateSummaryItem';
import FeeCostSummaryItem from '../../exchange/FooterCard/TradeSummaryCard/FeeCostSummaryItem';

import { CapitalizedText } from 'styles/common';

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
		handleCurrencySwap,
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
				<StyledSVGButton
					onClick={() => {
						handleCurrencySwap();
						console.log('***clicked');
					}}>
					<Svg src={IconArrowDown} />
				</StyledSVGButton>
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
			<StyledButton
				onClick={() => {
					console.log('***click');
					onSubmit();
				}}
				size="xl"
				// isActive={true}
				variant="primary"
			>
				<CapitalizedText>Swap</CapitalizedText>
			</StyledButton>
		</StyledRoot>
	);
};

export default SynthSwap;
