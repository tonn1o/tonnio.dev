import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import styled from "styled-components";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { Helmet } from "react-helmet";

deckDeckGoHighlightElement();

const Wrapper = styled.div`
  margin: 0 auto 0;
  width: 100%;
  padding: 0 16px;
  max-width: 680px;
`;

const Header = styled.div`
  margin-bottom: 64px;
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
  color: ${(props) => props.theme.colors.text};
`;

const Body = styled.div`
  color: ${(props) => props.theme.colors.text};
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

  a {
    color: #448cd4;
  }
`;

const BlogPost = ({ data }) => {
  return (
    <>
      <Helmet title={data.mdx.frontmatter.title} />
      <Layout>
        <Wrapper>
          <Header>
            <Title>{data.mdx.frontmatter.title}</Title>

            <Info>
              {data.mdx.frontmatter.date} | {data.mdx.timeToRead}
              {data.mdx.timeToRead > 1 ? "mins" : "min"} to read
            </Info>
          </Header>
          <Body>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </Body>
        </Wrapper>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      timeToRead
      body
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export default BlogPost;
