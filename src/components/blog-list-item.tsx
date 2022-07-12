import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Info = styled.div`
  display: flex;
  text-transform: uppercase;
  margin: 24px 0 8px;
  font-weight: 600;
  font-size: var(--fs-subtitle);
`;

const Title = styled.div`
  font-size: var(--fs-h2);
  font-weight: 400;
`;

const Description = styled.div`
  margin: 8px 0;
  font-size: var(--fs-description);
`;

const Wrapper = styled(Link)`
  min-height: 160px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  position: relative;

  &:hover .title-text {
    text-decoration: underline;
  }
`;

const BlogListItem = ({ title, slug, date, description, timeToRead }: PropTypes) => {
  return (
    <Wrapper to={slug}>
      <Info>
        {date} | {timeToRead} mins to read
      </Info>
      <Title className="title-text">
        {title}
      </Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default BlogListItem;

interface PropTypes {
  title: string;
  slug: string;
  date: string;
  description: string;
  timeToRead: number;
}
