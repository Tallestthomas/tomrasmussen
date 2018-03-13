import {injectGlobal} from 'styled-components';
import fonts from '../assets/fonts';

export default injectGlobal`

@import url('https://fonts.googleapis.com/css?family=Open+Sans');

@font-face {
font-family: "Pier";
 src: url(${fonts.PierWOFF2}) format('woff2'),
 url(${fonts.PierWOFF}) format('woff'),
 url(${fonts.PierTTF}) format('ttf');
 font-weight: normal;
 font-style: normal;
}

:root {
font-size: 16px;
}

* {
box-sizing: border-box;
padding: 0;
margin: 0;
}

html, body {
height: 100%;
font-family: 'Open Sans';
}

body {
padding: 2rem calc(50% - 350px + 1rem) 0;
color: #333;
line-height: 1.58;
@media screen and (max-width: 700px) {
padding: 2rem 1rem;
}
}

h1,
h2,
h3,
h4 { 
font-family: "Pier"
}

h1{
color: #b20303;
font-size: 2.5rem;
line-height: 1.2;
}

h2{
margin: 0.5rem 0;
}

p{
font-size: 1.2rem;
}


a {
color: #990000;
transition: color 0.25s;

 &:hover {
  color: #660000;
 }
}

.gatsby-highlight pre{
border-radius: 1rem;
padding: 1rem;
}

`;
