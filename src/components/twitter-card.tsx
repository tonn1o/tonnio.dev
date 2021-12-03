import React from "react";
import { Tweet } from "react-twitter-widgets";
import styled from "styled-components";

const Wrapper = styled.div`
  .twitter-tweet {
    margin: 32px auto !important;
  }
`;

const TwitterCard = ({ tweetId }: PropTypes) => {
  return (
    <Wrapper>
      <Tweet tweetId={tweetId} />
    </Wrapper>
  );
};

export default TwitterCard;

interface PropTypes {
  tweetId: string;
}
