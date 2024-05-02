'use client'

import React from 'react';
import StyledComponentsRegistry from './lib/registry'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import dark from '@/styles/themes/dark';
import NavBarLeft from '@/app/components/nav-bar-left'
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Reddit+Mono:wght@200..900&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Reddit Mono", monospace;
  }
`;

const Wrapper = styled.div`
  display:flex;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};
  -webkit-font-smoothing:  antialiased;
  height: 100vh;
  width: 100vw;
`;

const WrapperChildren = styled.div`
  width: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  
  ::-webkit-scrollbar{
    background-color: ${props => props.theme.colors.primary};
    width: 0.75rem;
  };

  ::-webkit-scrollbar-thumb{
    background-color: ${props => props.theme.colors.extra};
    border-radius: 20px;
    border: 3px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
  }

`;


type Props = {
  children: React.ReactElement
}

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={dark}>
            <GlobalStyle />
            <Wrapper>
              <NavBarLeft />
              <WrapperChildren>
                {children}
              </WrapperChildren>
            </Wrapper>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}