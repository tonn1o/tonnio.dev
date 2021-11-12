import React from "react";
import styled from "styled-components";
import Header from "./header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1300px;
  padding: 0 32px;
  height: 100vh;
`;

const HeaderWrapper = styled.div`
  margin-bottom: 64px;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      {children}
    </Wrapper>
  );
};

export default Layout;
