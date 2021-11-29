import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  margin-top: -100px;
  font-size: var(--fs-text-large);
`;

const NotFoundPage = () => {
  return (
    <>
      <Layout metaTitle="404 | not found" metaDescription="Page not Found">
        <Wrapper>
          <Message>404 | (ಥ﹏ಥ)</Message>
        </Wrapper>
      </Layout>
    </>
  );
};

export default NotFoundPage;
