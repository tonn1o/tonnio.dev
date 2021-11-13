import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./header";
import { theme } from "../constants/theme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1300px;
  padding: 0 32px;
  height: 100vh;
  color: ${(props) => props.theme.colors.text};

  a {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const HeaderWrapper = styled.div`
  margin-bottom: 64px;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
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
