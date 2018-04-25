import React, { Component } from "react";
import styled from 'styled-components';

const Links = styled.a`
text-decoration: none;
margin:1rem 0.5rem;
transform-origin: 50% 50%;
transition: transform 0.25s;
display: inline-block;

img {
    width: 100%;
    height: 35px;
    width: 35px;
    display: block;
  }
&:hover {
  transform: scale(1.1);
}


`;

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    return userLinks.map(link => (
      <Links key={link.label} href={link.url} target="_blank" rel="noopener">
        <img src={link.path} alt={link.label} />
      </Links>
    ));
  }
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
