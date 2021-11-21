import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const Blog = ({ data }) => {
    return (
        <Layout pageTitle="Blog">
            <ul>
                {data.allFile.nodes.map(node => {
                    return <li key={node.name}>{node.name}</li>
                })}
            </ul>
        </Layout>
    );
};

// Step 2: Export a page query
export const query = graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
        nodes {
          name
        }
      }
    }
`;

export default Blog;
