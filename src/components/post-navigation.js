import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: 32px;
`;

const NavItem = styled(Link)`
  color: #448cd4;
  font-size: 18px;
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
        <NavItemPrev to={"/" + prevPost.slug}>
          ← {prevPost.frontmatter.title}
        </NavItemPrev>
      ) : null}
      {nextPost ? (
        <NavItemNext to={"/" + nextPost.slug}>
          {nextPost.frontmatter.title} →
        </NavItemNext>
      ) : null}
    </Wrapper>
  );
};

export default PostNavigation;
