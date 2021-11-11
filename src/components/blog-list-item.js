import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled(Link)`
  min-height: 160px;
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  color: #292929;
  text-decoration: none;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 0;
    height: 100%;
    background: #f1f3f7;
    transition: width 0.5s ease-out;
  }

  &:hover::before {
    width: 100%;
  }
`;

const Info = styled.div`
  display: flex;
  text-transform: uppercase;
  margin: 24px 0 8px;
  font-weight: 600;
  font-size: 14px;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 400;
  color: #292929;
`;

const Description = styled.div`
  margin: 8px 0;
`;

const BlogListItem = ({ title, slug, date, description, timeToRead}) => {
  return (
    <Wrapper to={slug}>
      <Info>
        <div>{date} | {timeToRead} mins to read</div>
      </Info>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default BlogListItem;
