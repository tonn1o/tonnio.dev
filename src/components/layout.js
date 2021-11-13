import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./header";
import { theme } from "../constants/theme";
import { Helmet } from "react-helmet";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1300px;
  padding: 0 32px;
  height: 100vh;
  color: ${(props) => props.theme.colors.text};
`;

const HeaderWrapper = styled.div`
  margin-bottom: 64px;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon-16x16.png"
        />
        <link rel="manifest" href="./site.webmanifest" />
        <link rel="mask-icon" href="./safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>

      <Wrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>

        {children}
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
