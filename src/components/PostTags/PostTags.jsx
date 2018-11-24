import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";
import { postTags, postTag } from './posttags.module.scss'

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className={postTags}>
        {tags &&
            tags.map(tag => (
              <Link
                key={tag}
                to={`/tags/${_.kebabCase(tag)}`}
                className={postTag}
              >
                { tag }
              </Link>
            ))}
      </div>
    );
  }
}

export default PostTags;
