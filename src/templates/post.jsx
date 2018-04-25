import React from "react";
import Helmet from "react-helmet";
import Link from 'gatsby-link';
import styled from 'styled-components';
import { DiscussionEmbed } from 'disqus-react';
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import './gruvbox.css';
import config from "../../data/SiteConfig";

const Title = styled.h1`
margin: 1rem 0;
line-height: 1.2;
`

const HomeLink = styled(Link)`
display: block;
text-align: right;
margin-bottom: 1.4rem;
`


export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    const disqusConfig = {
      identifier : post.slug,
      title: post.title
    }

    return (
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div>
          <HomeLink to="/">Go back home</HomeLink>
          <Title>{post.title}</Title>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <div className="post-meta">
            <PostTags tags={post.tags} />
            <SocialLinks postPath={slug} postNode={postNode} />
            <DiscussionEmbed shortname={config.disqusShortname} config={disqusConfig} />
          </div>
        </div>
      </div>
      );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
        slug
      }
      fields {
        slug
      }
    }
  }
`;
