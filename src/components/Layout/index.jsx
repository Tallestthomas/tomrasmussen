import React from "react";
import Helmet from "react-helmet";
import config from "../../../data/SiteConfig";
import LayoutStyles from './layout.module.scss';
import TransitionWrapper from '../TransitionWrapper';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={LayoutStyles.layout}>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <TransitionWrapper>
          {children}
        </TransitionWrapper>
      </div>
    );
  }
}
