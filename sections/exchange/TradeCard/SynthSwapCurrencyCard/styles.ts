// Vendor
import styled from 'styled-components';

// Internal
import Card from 'components/Card';
import NumericInput from 'components/Input/NumericInput';
import { CurrencyAmountContainer, CurrencySelector } from '../CurrencyCard/styles';

export const StyledCardBody = styled(Card.Body)`
	padding: 28px;
`;

// figure out font size
export const StyledCurrencyAmount = styled(NumericInput)`
	color: white;
	font-size: 28px;
	height: inherit;
	text-align: right;
`;

export const StyledCurrencyAmountContainer = styled(CurrencyAmountContainer)`
	height: 84px;
	width: 308px;
`;

export const StyledCurrencySelector = styled(CurrencySelector)`
	background: none;
	&:hover: {
		background: none;
	}
`;

export const StyledLeft = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledWalletBalance = styled.div``;
