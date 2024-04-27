'use client'

import React from 'react';
import StyledComponentsRegistry from './lib/registry'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import dark from '@/styles/themes/dark';
import NavBarLeft from '@/app/components/nav-bar-left'
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    background-color: ${props => props.theme.colors.background};
  }
`;

const Wrapper = styled.div`
  display:flex;
  color: ${props => props.theme.colors.text};
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
              {children}
            </Wrapper>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}