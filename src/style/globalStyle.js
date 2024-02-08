import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        overflow-x: hidden;
    }

    :root{

        /* COLORS */

        --space: #0B1E8A;
        --space-light: #3D68B2;
        --space-dark: #040327;
        --mars: #E85937;
        --mars-light: #FF8C70;
        --mars-dark: #CF3F1D;
        --gray-01: #0D0E13;
        --gray-02: #2C2D3A;
        --gray-03: #60616F;
        --gray-04: #898A93;
        --gray-05: #D5D5DB;
        --uranus: #24ffe9;
        --sun: #F5D15F;
        --jupiter: #E00E34;
        --earth: #0FDD86;
        --saturn: #554AD7;
        --text: #FFF;
        --background: #04032C;
        --background-section: linear-gradient(180deg, #040327 0%, #0D0E13 24.49%);
        --background-form: #0E0D40;


        /* FONTS */

        --font-display: normal 800 62px "Heebo", sans-serif;

        --font-heading-1: normal 700 32px "Heebo", sans-serif;

        --font-heading-2: normal 500 24px "Heebo", sans-serif;

        --font-heading-3: normal 400 20px "Heebo", sans-serif;

        --font-mobile-heading-1: normal 800 36px "Heebo", sans-serif;

        --font-mobile-text-1: normal 500 14px "Heebo", sans-serif;

        --text-4: normal 700 18px "Heebo", sans-serif;
        --text-3: normal 500 18px "Heebo", sans-serif;
        --text-2: normal 500 14px "Heebo", sans-serif;
        --text-1: normal 400 16px "Heebo", sans-serif;
        --text-0: normal 400 14px "Heebo", sans-serif;

}   

`

export default GlobalStyle
