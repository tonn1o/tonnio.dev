import React from "react";
import styled from "styled-components";
import Header from "./header";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  padding: 0 32px;
`;

const ContentWrapper = styled.div`
  margin-top: 64px;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  );
};

export default Layout;
