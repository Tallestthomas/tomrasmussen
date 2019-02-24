import React from "react";
import Helmet from "react-helmet";
import config from "../../../data/SiteConfig";
import LayoutStyles from './layout.module.scss';

const MainLayout = ({ children }) => (
  <div className={LayoutStyles.layout}>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    {children}
  </div>
)

export default MainLayout;
