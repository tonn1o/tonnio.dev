import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { Helmet } from "react-helmet";
import PostNavigation from "../components/post-navigation";
import PostBody from "../components/post-body";
import { AllMdxWrapper } from "@/interfaces/mdx";
import { BlogPost as IBlogPost } from "../interfaces/blog-post";

deckDeckGoHighlightElement();

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 680px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const BlogPost = ({ data, pageContext }: PropTypes) => {
  const postId = pageContext.id;
  const posts = data.allMdx.nodes;
  const currentPost = posts.find((post) => post.id === postId);
  const currentPostIdx = posts.indexOf(currentPost);

  const prevPost = posts[currentPostIdx - 1] || null;
  const nextPost = posts[currentPostIdx + 1] || null;

  return (
    <>
      <Helmet title={currentPost.frontmatter.title} />
      <Layout>
        <Wrapper>
          <PostBody
            body={currentPost.body}
            timeToRead={currentPost.timeToRead}
            title={currentPost.frontmatter.title}
            date={currentPost.frontmatter.date}
          />

          <PostNavigation prevPost={prevPost} nextPost={nextPost} />
        </Wrapper>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        slug
        timeToRead
        body
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
`;

export default BlogPost;

interface PropTypes
  extends PageProps<AllMdxWrapper<IBlogPost[]>, { id: string }> {}
