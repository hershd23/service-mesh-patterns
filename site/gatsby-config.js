module.exports = {
  siteMetadata: {
    title: "Service Mesh Patterns",
    description:
      "Expect more from your infrastructure. Cloud native, open source software for your cloud native infrastructure and applications. Allowing developers to focus on business logic, not infrastructure concerns. Empowering operators to confidentally run modern infrastructure.",
    siteUrl: "https://service-mesh-patterns.github.io/service-mesh-patterns/",
    author: "Service Mesh Pattern Authors",
    permalink: "https://service-mesh-patterns.github.io/service-mesh-patterns/",
    image: "/images/service-mesh-pattern.png",
  },
  pathPrefix: "/service-mesh-patterns",
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "manifest",
        short_name: "starter",
        start_url: "/service-mesh-patterns/",
        background_color: "#3c494f",
        theme_color: "#00b39f",
        display: "minimal-ui",
        icon: "src/assets/images/favicon.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: "blurred",
        }
      }
    }, {
      resolve: "gatsby-transformer-sharp",
      options: {
        checkSupportedExtensions: false, // suppress warning about childImageSharp being null
      },
    }, {
      resolve: "gatsby-plugin-styled-components",
      options: {
        minify: false,
      },
    }, {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "images",
        "path": "./src/assets/images/"
      },
    }, {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "pages",
        "path": "./src/pages/"
      }
    }
  ]
};