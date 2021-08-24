// Vendor
import { MouseEvent } from 'react';

import styled, { css } from 'styled-components';

// Internal
import Card from 'components/Card';

export const CurrencySelector = styled.div<{
	currencyKeySelected: boolean;
	onClick: ((event: MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
	interactive?: boolean;
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
		!props.currencyKeySelected &&
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
