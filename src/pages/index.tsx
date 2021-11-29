import * as React from "react";
import Layout from "../components/layout";
import { BlogList } from "../components/blog-list";

const IndexPage = () => {
  return (
    <>
      <Layout
        metaTitle="tonnio"
        metaDescription="Personal blog by Toni Babenko"
      >
        <BlogList />
      </Layout>
    </>
  );
};

export default IndexPage;
