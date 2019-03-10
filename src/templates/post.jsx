import React from "react";
import Helmet from "react-helmet";
import { graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import { postContent, postContainer, postInfo, postLayout, postMeta } from '../styles/post.module.scss';
import './gruvbox.css';
import Hero from '../components/Hero'
import config from "../../data/SiteConfig";
import Header from "../components/Header";

const PostTemplate = ({ pathContext, data }) => {
  const { slug } = pathContext;
  const postNode = data.markdownRemark;
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
      {
        post && (
          <div>
            <Helmet>
              <title>{`${post.title} | ${config.siteTitle}`}</title>
            </Helmet>
            <SEO postPath={slug} postNode={postNode} postSEO />
            <Header />
            <Hero />
            <div className={`${postLayout} layout`}>
              <div className={postContainer}>
                <h1>{post.title}</h1>
                <p className={postInfo}>
                  {post.date.split('T')[0]}
                  <span>/</span>
                  {postNode.timeToRead}
                  {' '}
                  minute read
                </p>
                <div className={postContent} dangerouslySetInnerHTML={{ __html: postNode.html }} />
                <div className={postMeta}>
                  <PostTags tags={post.tags} />
                  <SocialLinks postPath={slug} postNode={postNode} />
                  <DiscussionEmbed shortname={config.disqusShortname} config={disqusConfig} />
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}


/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date
        category
        tags
      }
      fields {
        slug
      }
    }
  }
`;

export default PostTemplate;
