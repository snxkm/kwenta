// Vendor
import React, { useMemo } from 'react';
import isNull from 'lodash/isNull';
import { Svg } from 'react-optimized-image';
import { useTranslation } from 'react-i18next';

// Internal
import CaretDownIcon from 'assets/svg/app/synthswap/caret-down.svg';
import { NO_VALUE } from 'constants/placeholder';
import { formatCurrency } from 'utils/formatters/number';

// Styles
// import { S_root } from './styles';
import { CapitalizedText } from 'styles/common';

import { CurrencyContainer, StyledCard } from '../CurrencyCard/styles';

import {
	StyledCardBody,
	StyledCurrencyAmount,
	StyledCurrencyAmountContainer,
	StyledCurrencySelector,
	StyledLeft,
	StyledWalletBalance,
} from './styles';

const SynthSwapCurrencyCard = ({
	amount,
	currencyKey,
	onAmountChange,
	onCurrencySelect = () => {}, // remove default val later
	side, // to-add
	walletBalance,
}) => {
	const { t } = useTranslation();
	const hasWalletBalance = useMemo(() => !isNull(walletBalance) && !isNull(currencyKey), [
		walletBalance,
		currencyKey,
	]);

	const walletBalanceShown = hasWalletBalance
		? formatCurrency(currencyKey, walletBalance)
		: NO_VALUE;

	return (
		<StyledCard className={`currency-card currency-card-${side}`} interactive={true}>
			<StyledCardBody>
				<CurrencyContainer>
					<StyledLeft>
						<StyledCurrencySelector
							isCurrencyKeySelected={!isNull(currencyKey)}
							onClick={onCurrencySelect}
							role="button"
						>
							{currencyKey ?? (
								<CapitalizedText>
									{t('exchange.currency-card.currency-selector.select-token')}
								</CapitalizedText>
							)}{' '}
							{onCurrencySelect && <Svg src={CaretDownIcon} />}
						</StyledCurrencySelector>
						{currencyKey && (
							<StyledWalletBalance>
								<CapitalizedText>{t('synthSwap.balance')}</CapitalizedText>
								{': '}
								{walletBalanceShown}
							</StyledWalletBalance>
						)}
					</StyledLeft>
					{!isNull(currencyKey) && (
						<StyledCurrencyAmountContainer
						// className="currency-amount-container"
						// disableInput={disableInput}
						>
							<StyledCurrencyAmount
								value={amount}
								onChange={(_, value) => onAmountChange(value)}
								placeholder="0"
								// data-testid="currency-amount"
							/>
							{/*
								<FlexDivRowCentered>
									<CurrencyAmountValue data-testid="amount-value">
										{tradeAmount != null
											? formatCurrency(selectedPriceCurrency.name as CurrencyKey, tradeAmount, {
													sign: selectedPriceCurrency.sign,
											  })
											: null}
									</CurrencyAmountValue>
									<Slippage>
										{!isLoading &&
											slippagePercent != null &&
											slippagePercent.lt(0) &&
											formatPercent(slippagePercent)}
									</Slippage>
								</FlexDivRowCentered>
								{isLoading && <StyledLoader width="24px" height="24px" />} */}
						</StyledCurrencyAmountContainer>
					)}
				</CurrencyContainer>
			</StyledCardBody>
		</StyledCard>
	);
};

export default SynthSwapCurrencyCard;
