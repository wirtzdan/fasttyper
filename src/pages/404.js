import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <span>404</span>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
