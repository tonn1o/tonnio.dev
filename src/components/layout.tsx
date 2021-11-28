import React from "react";
import styled from "styled-components";
import Header from "./header";
import { Helmet } from "react-helmet";
import openGraphImage from "../images/open-graph.jpg";
import { useLocation } from "@reach/router";

const WrapperOuter = styled.div`
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1300px;
  padding: 0 32px;
  /* mobile viewport bug fix */
  min-height: calc(100vh - calc(100vh - 100%));
  min-height: -webkit-fill-available;
`;

const HeaderWrapper = styled.div`
  margin-bottom: 32px;
`;

const Layout = ({ children, metaTitle }: PropTypes) => {
  const currentUrl = useLocation().href;

  return (
    <>
      <Helmet title={metaTitle}>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={openGraphImage} />
        <meta property="og:url" content={currentUrl} />
      </Helmet>

      <WrapperOuter>
        <Wrapper>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>

          {children}
        </Wrapper>
      </WrapperOuter>
    </>
  );
};

export default Layout;

interface PropTypes {
  children: React.ReactNode;
  metaTitle: string;
}
