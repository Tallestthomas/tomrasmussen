import React from 'react';
import Link from 'gatsby-link';
import { CommentCount } from 'disqus-react';
import config from '../../../data/SiteConfig';
import { postListing, 
  postListingWrapper, 
  postListingLatestPost,
  postListingMeta,
  postListingTitle,
  postListingReadMore
} from './postlisting.module.scss';

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
      <div className={postListingWrapper}>
        <p className={postListingLatestPost}>
          Latest Posts
        </p>
        {/* Your post list here. */
          postList.map(post => {
            const disqusConfig = {
              identifier: post.path.substring(1),
              title: post.title
            }
            return(
              <div key={post.date} className={postListing}>
                <h1 className={postListingTitle}>
                  <Link to={post.path}>
                    {post.title}
                  </Link>
                </h1>
                <p className={postListingMeta}>
                  {post.date} 
                  {' '}
                  <span style={{marginLeft: '2rem'}}>
                    {post.timeToRead}
                    {' '}
                    minute read
                  </span>
                </p>
                <p>{post.excerpt}</p>
                <Link to={post.path} className={postListingReadMore}>Read More</Link>
                <CommentCount shortname={config.disqusShortname} config={disqusConfig} />
              </div>
            )}
          )}
      </div>
    );
  }
}

export default PostListing;
