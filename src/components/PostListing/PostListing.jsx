import React from 'react';
import Link from 'gatsby-link';
import { CommentCount } from 'disqus-react';
import config from '../../../data/SiteConfig';

class PostListing extends React.Component {
  getPostList() {
    const { postEdges } = this.props; 
    return postEdges.map(postEdge => ({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.frontmatter.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
    }));
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
              <div key={post.date}>
                <h1>{post.title}</h1>
                <p>
                  {post.date} 
                  {' '}
                  <span style={{marginLeft: '2rem'}}>
                    {post.timeToRead}
                    {' '}
                    minute read
                  </span>
                </p>
                <p>{post.excerpt}</p>
                <Link to={post.path}>Read More</Link>
                <CommentCount shortname={config.disqusShortname} config={disqusConfig} />
              </div>
            )}
          )}
      </div>
    );
  }
}

export default PostListing;
