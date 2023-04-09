import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
	    padding: 0;
	    border: 0;
	    font-size: 100%;
	    vertical-align: baseline;
	    line-height: 150%;
        font-family: 'Inter', sans-serif;
    }

    body {
        width: 100vw;
        min-width: 20rem;
        height: 100vh;
        min-height: max-content;
    }

    ol, ul {
	    list-style: none;
    }


    :root {
        --color-grey1:#FFFFFF;
        --color-grey0: #F5F5F5;
        --color-grey2: #E0E0E0;
        --color-grey3: #828282;
        --color-grey4: #BDBDBD;
        --color-grey10: #333333;

        --color-primary: #27AE60;
        --color-primary2 :#93D7AF;
        --color-secundary: #EB5757;
    }

`