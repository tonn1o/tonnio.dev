import * as React from "react";
import Layout from "../components/layout";
import { BlogList } from "../components/blog-list";
import {Helmet} from "react-helmet";

const IndexPage = () => {
  return (
    <>
      <Helmet title="tonnio" />
      <Layout>
        <BlogList />
      </Layout>
    </>
  );
};

export default IndexPage;
