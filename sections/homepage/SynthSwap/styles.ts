// Vendor
import styled from 'styled-components';

// Internal
import Button from 'components/Button';
import { SummaryItems } from '../../exchange/FooterCard/common';

import { resetButtonCSS } from 'styles/common';
import { zIndex } from 'constants/ui';

// border isn't perfect. come back to it.
// https://css-tricks.com/gradient-borders-in-css/
export const StyledRoot = styled.div`
	border-style: solid;
	border-image-slice: 1;
	border-width: 4px;
	border-image-source: linear-gradient(
		180deg,
		rgba(102, 113, 209, 0.14) 0%,
		rgba(86, 96, 185, 0.14) 100%
	);
	height: 540px;
	margin: auto auto;
	padding: 30px;
	width: 625px;
	border-radius: 16px;
`;

export const StyledButton = styled(Button)`
	font-size: 20px;
	height: 76px;
	width: 100%;
`;

export const StyledCurrencyCardDivider = styled.div`
	height: 6px;
	position: relative;
	width: 100%;
`;

export const StyledSVGButton = styled.button`
	${resetButtonCSS}
	background: none;
	border: none;
	bottom: -18px;
	cursor: pointer;
	left: calc(50% - 19px);
	outline: none;
	padding: 0;
	position: absolute;
	z-index: ${zIndex.BASE + 1};
`;

export const StyledHorizontalDivider = styled.div`
	height: 20px;
	width: 100%;
`;

export const StyledTradeSummaryContainer = styled.div`
	background: none;
	border: 1px solid ${(props) => props.theme.colors.elderberry};
	border-radius: 4px;
	height: 76px;
	width: 100%;
`;

export const StyledSummaryItems = styled(SummaryItems)`
	padding: 22px 24px;
`;
