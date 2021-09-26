import { createGlobalStyle } from 'styled-components';

import FuturaLightWoff2 from './FuturaLT-Light.woff2';
import FuturaLightWoff from './FuturaLT-Light.woff';
import FuturaWoff2 from './FuturaLT.woff2';
import FuturaWoff from './FuturaLT.woff';
import ConsolasWoff2 from './Consolas.woff2';
import ConsolasWoff from './Consolas.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Futura Light';
        src: local('Futura Light'), local('Futura Light'),
        url(${FuturaLightWoff2}) format('woff2'),
        url(${FuturaLightWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Futura';
        src: local('Futura'), local('Futura'),
        url(${FuturaWoff2}) format('woff2'),
        url(${FuturaWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Consolas';
        src: local('Consolas'), local('Consolas'),
        url(${ConsolasWoff2}) format('woff2'),
        url(${ConsolasWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
`;