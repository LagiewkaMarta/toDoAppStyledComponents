import {createGlobalStyle} from "styled-components";
import {setColor} from "./styles";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700,900&display=swap&subset=latin-ext');
*{
    margin: 0;
    padding:0;
    box-sizing:border-box;
}
body {
    background-color: ${setColor.backgroundColor};
    font-family: 'Raleway', sans-serif;
}
`