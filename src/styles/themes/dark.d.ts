import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
            background: string,
            background2: string,
            primary: string,
            secondart: string,
            text: string,
            text2: string,
            extra: string
        }
    }
};