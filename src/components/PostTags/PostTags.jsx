import React from "react";
import { kebabCase } from "lodash";
import { Link } from "gatsby";
import { postTags, postTag } from './posttags.module.scss'

const PostTags = ({tags}) => (
  <div className={postTags}>
    {tags &&
        tags.map(tag => (
          <Link
            key={tag}
            to={`/tags/${kebabCase(tag)}`}
            className={postTag}
          >
            { tag }
          </Link>
        ))}
  </div>
)

export default PostTags;
