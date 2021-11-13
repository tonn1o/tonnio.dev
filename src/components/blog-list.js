import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BlogListItem from "./blog-list-item";
import styled from "styled-components";
import HorizontalSeparator from "./horizontal-separator";

const Wrapper = styled.div`
  width: 100%;
`;

export const BlogList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          slug
          id
          excerpt
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      {data.allMdx.nodes.map(
        ({ frontmatter, slug, id, excerpt, timeToRead }) => (
          <div key={id}>
            <HorizontalSeparator />
            <BlogListItem
              title={frontmatter.title}
              slug={slug}
              date={frontmatter.date}
              description={excerpt}
              timeToRead={timeToRead}
            />
          </div>
        )
      )}
    </Wrapper>
  );
};
