import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Blog = ({ data }) => {
    return (
        <Layout pageTitle="Blog">
            {data.allMdx.nodes.map(node => {
                return <article key={node.id}>
                    <h2>{node.frontmatter.title}</h2>
                    <p>{node.frontmatter.date}</p>
                    <MDXRenderer>{node.body}</MDXRenderer>
                </article>
            })}
        </Layout>
    );
};

// Step 2: Export a page query
export const query = graphql`
    query MyQuery {
      allMdx(sort: {order: DESC, fields: frontmatter___date}) {
        nodes {
          frontmatter {
            title
            date(formatString: "dddd, MMMM Do YYYY")
          }
          id
          body
        }
      }
    }
`;

export default Blog;
