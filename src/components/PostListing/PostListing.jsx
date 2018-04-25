import React from 'react';
import Link from 'gatsby-link';
import { CommentCount } from 'disqus-react';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';

const ReadMore = styled(Link)`
  display: inline-block;
  border: 1px solid #990000;
  text-decoration: none;
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 0.25rem 0.5rem;
  transition: background 0.25s;

  &:hover {
    color: #fff;
    background-color: #990000;
  }
`;

const PostContainer = styled.div`
  margin: 1rem 0 2rem;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.8);
  padding: 1rem;
  transition: box-shadow 0.25s;

  &:hover {
    box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.8);
  }
`;

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => {
        const disqusConfig = {
          identifier: post.path.substring(1),
          title: post.title
        }
        return(
          <PostContainer key={post.date}>
            <h1>{post.title}</h1>
            <p>{post.date} <span style={{marginLeft: '2rem'}}>{post.timeToRead} minute read</span></p>
            <p>{post.excerpt}</p>
            <ReadMore to={post.path}>Read More</ReadMore>
            <CommentCount shortname={config.disqusShortname} config={disqusConfig} />
          </PostContainer>
          )}
          )}
      </div>
    );
  }
}

export default PostListing;
