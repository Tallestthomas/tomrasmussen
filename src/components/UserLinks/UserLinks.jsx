import React, { Component } from "react";
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

const Links = styled.a`
text-decoration: none;
margin:1rem 0.5rem;
transform-origin: 50% 50%;
transition: transform 0.25s;
display: inline-block;

.socialIcon {
  display: inline-block;
  max-width: 50px;

  svg {
    width: 100%;
    height: 35px;
    width: 35px;
    display: block;
  }

  svg * {
    transition: fill 0.25s;
    fill: #990000;
  }

  svg:hover * {
    fill: #660000;
  }
}

&:hover {
  transform: scale(1.1);
}


`;

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link => (
      <Links key={link.label} href={link.url} target="_blank" rel="noopener">
        <SVG
          src={link.path}
          className='socialIcon'
        />
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
