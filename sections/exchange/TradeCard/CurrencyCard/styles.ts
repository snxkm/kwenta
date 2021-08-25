// Vendor
import styled, { css } from 'styled-components';
import { MouseEvent } from 'react';

// Internal
import Card from 'components/Card';
import NumericInput from 'components/Input/NumericInput';
import { numericValueCSS } from 'styles/common';

import { FlexDivRowCentered } from 'styles/common';

export const CurrencyAmount = styled(NumericInput)`
	font-size: 16px;
	border: 0;
	height: 30px;
`;

export const CurrencyAmountValue = styled.div`
	${numericValueCSS};
	padding: 0px 8px 2px 8px;
	font-size: 10px;
	width: 150px;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const CurrencyAmountContainer = styled.div<{ disableInput?: boolean }>`
	background-color: ${(props) => props.theme.colors.black};
	border-radius: 4px;
	width: 100%;
	position: relative;
	${(props) =>
		props.disableInput &&
		css`
			pointer-events: none;
		`}
`;

export const CurrencyContainer = styled(FlexDivRowCentered)`
	padding-bottom: 6px;
`;

export const CurrencySelector = styled.div<{
	isCurrencyKeySelected: boolean;
	onClick: ((event: MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
}>`
	display: grid;
	align-items: center;
	grid-auto-flow: column;
	grid-gap: 9px;
	margin-right: 20px;
	font-size: 16px;
	padding: 4px 10px;
	margin-left: -10px;
	font-family: ${(props) => props.theme.fonts.bold};
	color: ${(props) => props.theme.colors.white};
	svg {
		color: ${(props) => props.theme.colors.goldColors.color1};
	}

	${(props) =>
		!props.isCurrencyKeySelected &&
		css`
			margin: 12px 6px 12px -10px;
		`};

	${(props) =>
		props.onClick &&
		css`
			&:hover {
				background-color: ${(props) => props.theme.colors.black};
				border-radius: 100px;
				cursor: pointer;
			}
		`};
`;

export const CurrencyWalletBalanceContainer = styled.div``;

export const StyledCard = styled(Card)<{ interactive?: boolean }>`
	${(props) =>
		!props.interactive &&
		css`
			pointer-events: none;
		`}
`;

export const StyledCardBody = styled(Card.Body)`
	padding: 11px 30px;
`;
