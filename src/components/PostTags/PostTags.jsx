import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";
import styled from 'styled-components';

const Tags = styled.div`
dispay: flex;
align-items: center;
justify-content: center;
margin: 1rem 0;
`;

const Button = styled.button`
 color: #990000;
 border: 1px solid #990000;
 padding: 0.25rem 0.5rem
 background-color: #fff;
 margin: 0 0.25rem;
 transition: background 0.25s;

&:hover {
  background-color: #990000;
  color: #fff;
}
`;

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
        <Tags>
          {tags &&
          tags.map(tag => (
          <Link
            key={tag}
            style={{ textDecoration: "none" }}
            to={`/tags/${_.kebabCase(tag)}`}
          >
            <Button>{tag}</Button>
          </Link>
          ))}
        </Tags>
        );
  }
}

export default PostTags;
