import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Info = styled.div`
  display: flex;
  text-transform: uppercase;
  margin: 24px 0 8px;
  font-weight: 600;
  font-size: 14px;
`;

const Title = styled.div`
  font-size: 34px;
  font-weight: 400;
`;

const Description = styled.div`
  margin: 8px 0;
  font-size: 18px;
`;

const UnderlinedText = styled.span`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 5px;
    width: 0;
    height: 2px;
    background: var(--c-cobalt);
    transition: width 0.4s ease;
  }
`;

const Wrapper = styled(Link)`
  min-height: 160px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  position: relative;

  &:hover .underlined-text::before {
    width: 100%;
  }
`;

const BlogListItem = ({ title, slug, date, description, timeToRead }) => {
  return (
    <Wrapper to={slug}>
      <Info>
        {date} | {timeToRead} mins to read
      </Info>
      <Title>
        <UnderlinedText className="underlined-text">{title}</UnderlinedText>
      </Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default BlogListItem;
