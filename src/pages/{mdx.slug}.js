import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import styled from "styled-components";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

deckDeckGoHighlightElement();

const Header = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 34px;
  font-weight: 400;
  margin-bottom: 8px;
`;

const Info = styled.div`
  text-transform: uppercase;
  margin: 0 auto 8px;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
`;

const Body = styled.div`
  margin: 64px auto 0;
  width: 100%;
  padding: 0 16px;
  max-width: 700px;
  color: ${(props) => props.theme.colors.text};
`;

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <Header>
        <Title>{data.mdx.frontmatter.title}</Title>
        <Info>
          {data.mdx.frontmatter.date} | {data.mdx.timeToRead} mins to read
        </Info>
      </Header>
      <Body>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Body>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
