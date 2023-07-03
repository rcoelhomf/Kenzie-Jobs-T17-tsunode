import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
	--color-blue: #8490ff;
	--color-black: #101119;
	--color-white: #ffffff;
	--color-lightblue: #f9f9ff;
    }

    body {
        width: 100vw;
        overflow: overlay;
    }
`