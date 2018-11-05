import React, { Component } from "react";
import { ShareButtons, 
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  RedditIcon,
  RedditShareCount,
  RedditShareButton,
  LinkedinIcon,
  LinkedinShareCount,
  LinkedinShareButton,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import styled from 'styled-components';
import config from "../../../data/SiteConfig";

const SocialLinksContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 2rem 0;

div {
cursor: pointer;
}
`;

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props;
    const post = postNode.frontmatter;
    const url = config.siteUrl + config.pathPrefix + postPath;

    const iconSize = mobile ? 36 : 48;
    const filter = count => (count > 0 ? count : "");

    return (
      <SocialLinksContainer>
        <RedditShareButton url={url} title={post.title}>
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </RedditShareCount>
        </RedditShareButton>
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <FacebookShareButton
          url={url}
          title={post.title}
          picture={post.cover}
          description={postNode.excerpt}
        >
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </FacebookShareCount>
        </FacebookShareButton>
        <LinkedinShareButton
          url={url}
          title={post.title}
          description={postNode.excerpt}
        >
          <LinkedinIcon round size={iconSize} />
          <LinkedinShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </LinkedinShareCount>
        </LinkedinShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon round size={iconSize} />
        </TelegramShareButton>
      </SocialLinksContainer>
        );
  }
}

export default SocialLinks;
