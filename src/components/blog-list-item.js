import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Info = styled.div`
  display: flex;
  text-transform: uppercase;
  margin: 24px 0 8px;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 400;
`;

const Description = styled.div`
  margin: 8px 0;
  color: ${(props) => props.theme.colors.text};
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
    background: ${(props) => props.theme.colors.accent};
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
