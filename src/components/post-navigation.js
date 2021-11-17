import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { appConsts } from "../constants/constants";

const Wrapper = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: 32px;
`;

const NavItem = styled(Link)`
  font-size: var(--fs-nav-link);
  transition: opacity 0.3s;

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
`;

const PostNavigation = ({ prevPost, nextPost }) => {
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