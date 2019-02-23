import React from "react";
import Helmet from "react-helmet";
import { graphql } from 'gatsby';
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";
import { tagContainer } from '../styles/tags.module.scss';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default class TagTemplate extends React.Component {
  render() {
    const tag = this.props.pathContext.tag;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
        <Header />
        <Hero />
        <div className={tagContainer}>
          <PostListing postEdges={postEdges} />
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
