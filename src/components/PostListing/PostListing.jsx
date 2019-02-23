import React from 'react';
import { Link } from 'gatsby';
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

  render() {
    const postList = this.props.postEdges;

    return (
      <div className={postListingWrapper}>
        <p className={postListingLatestPost}>
          Latest Posts
        </p>
        {/* Your post list here. */
          postList &&
            postList.map(post => {
              const { node } =  post;
              const disqusConfig = {
                identifier: node.fields.slug.substring(1),
                title: node.frontmatter.title
              }
              return(
                <div key={node.frontmatter.title} className={postListing}>
                  <h1 className={postListingTitle}>
                    <Link to={node.fields.slug}>
                      {node.frontmatter.title}
                    </Link>
                  </h1>
                  <p className={postListingMeta}>
                    {node.frontmatter.date.split('T')[0]} 
                    {' '}
                    <span style={{marginLeft: '2rem'}}>
                      {node.timeToRead}
                      {' '}
                      minute read
                    </span>
                  </p>
                  <p>{node.excerpt}</p>
                  <CommentCount shortname={config.disqusShortname} config={disqusConfig} />
                  <br />
                  <Link to={node.fields.slug} className={postListingReadMore}>Read More</Link>
                </div>
              )}
            )}
      </div>
    );
  }
}

export default PostListing;
