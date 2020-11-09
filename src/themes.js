import { createGlobalStyle } from "styled-components";

// only place where you need to change the colours
const primaryColor = "#94dccc";
const secondaryColor = "#fff";

export const lightTheme = {
  body: primaryColor,
  fontColor: secondaryColor,
  cardColor: secondaryColor,
  cardFontColor: primaryColor,
};

export const darkTheme = {
  body: secondaryColor,
  fontColor: primaryColor,
  cardColor: primaryColor,
  cardFontColor: secondaryColor,
};

export const GlobalStyles = createGlobalStyle`
	body {
        background-color: ${(props) => props.theme.body};
    }
    .invert{
        background-color: ${(props) => props.theme.cardColor};
        color: ${(props) => props.theme.cardFontColor};
    }
`;

