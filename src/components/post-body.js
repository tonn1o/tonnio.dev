import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";

const Header = styled.div`
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 8px;
`;

const Info = styled.div`
  text-transform: uppercase;
  margin: 0 auto 8px;
  font-weight: 600;
  font-size: 14px;
`;

const Body = styled.div`
  font-size: 20px;

  /* Styles used for code highlighting in mdx files (https://docs.deckdeckgo.com/?path=/story/components-highlight-code--highlight-code) */
  --deckgo-highlight-code-carbon-toolbar-display: none;
  --deckgo-highlight-code-white-space: pre;
  --deckgo-highlight-code-padding: 24px;
  --deckgo-highlight-code-font-size: 14px;
  --deckgo-highlight-code-carbon-header-padding: 0;

  p,
  deckgo-highlight-code {
    margin-bottom: 32px;
    line-height: 1.4;
    letter-spacing: 0;
  }

  p code {
    padding: 0 4px;
    background: ${(props) => props.theme.colors.grayLighter};
    color: ${(props) => props.theme.colors.red};
  }

  a {
    color: ${(props) => props.theme.colors.accent};
    transition: opacity 0.3s;

    &:hover,
    &:active {
      opacity: 0.7;
    }
  }
`;

const PostBody = ({ title, timeToRead, date, body }) => {
  return (
    <>
      <Header>
        <Title>{title}</Title>
        <Info>
          {date} | {timeToRead} {timeToRead > 1 ? "mins" : "min"} to read
        </Info>
      </Header>
      <Body>
        <MDXRenderer>{body}</MDXRenderer>
      </Body>
    </>
  );
};

export default PostBody;
