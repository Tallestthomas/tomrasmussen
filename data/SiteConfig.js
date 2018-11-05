module.exports = {
  blogPostDir: 'posts', // The name of directory that contains your posts.
  siteTitle: 'Tom Rasmussen', // Site title.
  siteTitleAlt: 'Tom Rasmussen Javascript Developer', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://tomrasmussen.me', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    'Personal blog of Tom Rasmussen, Full Stack Javscript Developer', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '', // FB Application ID for using app insights
  googleAnalyticsID: process.env.GACODE, // GA tracking ID.
  disqusShortname: 'tom-rasmussen-gatsby-blog', // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  userName: 'TallestThomas', // Username to display in the author segment.
  userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Long Island, New York', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription: '', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/tallestthomas',
      path: '/social/github.svg',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/tallestthomas',
      path: '/social/twitter.svg',
    },
    {
      label: 'Instagram',
      url: 'https://instagram.com/tallestthomas',
      path: '/social/instagram.svg',
    },
    {
      label: 'Email',
      url: 'mailto:info@tomrasmussen.me',
      path: '/social/email.svg',
    },
  ],
  copyright: 'Copyright Tom Rasmussen © 2018.', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#990000', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
};
