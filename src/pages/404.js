import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { Helmet } from "react-helmet";

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
      <Helmet title="404" />
      <Layout>
        <Wrapper>
          <Message>404 | (ಥ﹏ಥ)</Message>
        </Wrapper>
      </Layout>
    </>
  );
};

export default NotFoundPage;
