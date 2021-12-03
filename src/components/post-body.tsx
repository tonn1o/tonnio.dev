import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import { Tweet } from "react-twitter-widgets";
import { MDXProvider } from "@mdx-js/react";

const Header = styled.div`
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-size: var(--fs-h1);
  font-weight: 400;
  margin-bottom: 8px;
`;

const Info = styled.div`
  text-transform: uppercase;
  margin: 0 auto 8px;
  font-weight: 600;
  font-size: var(--fs-subtitle);
`;

const Body = styled.div`
  /* Styles used for code highlighting in mdx files (https://docs.deckdeckgo.com/?path=/story/components-highlight-code--highlight-code) */

  p,
  deckgo-highlight-code {
    line-height: 1.4;
    letter-spacing: 0;

    --deckgo-highlight-code-token-atrule: var(--c-purple);
    --deckgo-highlight-code-carbon-toolbar-display: none;
    --deckgo-highlight-code-white-space: pre;
    --deckgo-highlight-code-padding: 24px;
    --deckgo-highlight-code-font-size: var(--fs-code);
    --deckgo-highlight-code-carbon-header-padding: 0;
    --deckgo-highlight-code-margin: 0;
    --deckgo-highlight-code-background: var(--c-code-bg);
    --deckgo-highlight-code-carbon-box-shadow: 0;
  }

  p,
  deckgo-highlight-code,
  ul {
    margin-top: 0;
    margin-bottom: 32px;
  }

  h1,
  h2,
  h3 {
    margin-top: 0;
    margin-bottom: 16px;
  }

  .twitter-tweet {
    margin: 0 auto 32px !important;
  }

  code:not(.container) {
    padding: 0 0.2em;
    background: var(--c-code-bg);
    font-size: 0.8em;
    border-radius: 4px;
    font-family: Consolas, Menlo, Courier, monospace;
  }

  a {
    color: var(--c-sky-blue);
    transition: opacity 0.3s;

    &:hover,
    &:active {
      opacity: 0.7;
    }
  }
`;

const PostBody = ({ title, timeToRead, date, body }: PropTypes) => {
  return (
    <>
      <Header>
        <Title>{title}</Title>
        <Info>
          {date} | {timeToRead} {timeToRead > 1 ? "mins" : "min"} to read
        </Info>
      </Header>
      <Body>
        <MDXProvider components={{ Tweet }}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Body>
    </>
  );
};

export default PostBody;

interface PropTypes {
  title: string;
  timeToRead: number;
  date: string;
  body: string;
}
