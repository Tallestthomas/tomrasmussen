import React from "react";
import Helmet from "react-helmet";
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Header from '../components/Header';

import '../styles/global.scss';


export default class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO postEdges={postEdges} />
          <Header />
          <Hero>
            <h1>Hello, I&apos;m Tom</h1>
            <h3>
              I&apos;m a Javascript developer in Charlotte, NC.  I love code, command line, and pretty much anything tech

            </h3>
          </Hero>
          <div className="layout">
            <PostListing postEdges={postEdges} />
          </div>
        </div>
      </Layout>
    );
  }
}


export const pageQuery = graphql`
query IndexQuery {
allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC  }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
}
`;`
`
