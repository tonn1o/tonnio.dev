import "../styles/global.css";
import "../styles/fonts.css";

import * as React from "react";
import Layout from "../components/layout";
import { BlogList } from "../components/blog-list";

const IndexPage = () => {
  return (
    <Layout>
      <BlogList />
    </Layout>
  );
};

export default IndexPage;
