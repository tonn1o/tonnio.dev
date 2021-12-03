import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import TwitterCard from "../components/twitter-card";

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
  line-height: 1.4;
  letter-spacing: 0;

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

  hr {
    margin: 32px 0;
  }

  code:not(.container) {
    padding: 0.125em 4px;
    font-size: 0.75em;
    border-radius: 4px;
    background: var(--c-code-bg);
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
        <MDXProvider components={{ TwitterCard }}>
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
