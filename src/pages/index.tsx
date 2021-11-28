import * as React from "react";
import Layout from "../components/layout";
import { BlogList } from "../components/blog-list";

const IndexPage = () => {
  return (
    <>
      <Layout metaTitle="tonnio">
        <BlogList />
      </Layout>
    </>
  );
};

export default IndexPage;
