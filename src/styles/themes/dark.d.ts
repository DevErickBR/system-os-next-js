import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
            background: string,
            primary: string,
            secondart: string,
            text: string,
            extra: string
        }
    }
};