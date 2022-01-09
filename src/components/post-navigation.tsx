import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { appConsts } from "../constants/constants";
import { BlogPost } from "src/interfaces/blog-post";

const Wrapper = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: 32px;
`;

const NavItem = styled(Link)`
  font-size: var(--fs-nav-link);
  transition: opacity 0.3s;
  width: 45%;

  &:hover,
  &:active {
    opacity: 0.7;
  }
`;

const NavItemPrev = styled(NavItem)`
  margin-right: auto;
`;

const NavItemNext = styled(NavItem)`
  margin-left: auto;
  text-align: right;
`;

const PostNavigation = ({ prevPost, nextPost }: PropTypes) => {
  return (
    <Wrapper>
      {prevPost ? (
        <NavItemPrev to={appConsts.routes.root + prevPost.slug}>
          ← {prevPost.frontmatter.title}
        </NavItemPrev>
      ) : null}
      {nextPost ? (
        <NavItemNext to={appConsts.routes.root + nextPost.slug}>
          {nextPost.frontmatter.title} →
        </NavItemNext>
      ) : null}
    </Wrapper>
  );
};

export default PostNavigation;

interface PropTypes {
  prevPost: Pick<BlogPost, "frontmatter" | "slug">;
  nextPost: Pick<BlogPost, "frontmatter" | "slug">;
}
