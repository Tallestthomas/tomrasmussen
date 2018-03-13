import React from "react";
import Helmet from "react-helmet";
import styled from 'styled-components';
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import UserLinks from '../components/UserLinks/UserLinks';


const Hero = styled.div`
margin: 4rem 0;
`;

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <Hero>
          <h1>Hello, I&apos;m Tom</h1>
          <p>I&apos;m a fullstack javascript developer and I like to share my adventures in life and code.</p>
          <UserLinks config={config} />
        </Hero>
        <PostListing postEdges={postEdges} />
      </div>
      );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
