// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "S4U",
  tagline: "Documentação S4U",
  url: "https://www.docs.s4u.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/S4U.svg",
  organizationName: "tccService4u", // Usually your GitHub org/user name.
  projectName: "s4u-documentacao", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/tccService4u/Service4u",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Service 4 You",
        logo: {
          alt: "My Site Logo",
          src: "img/S4U.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentação",
          },

          {
            href: "https://github.com/tccService4u/Service4u",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentação",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/tccService4u/Service4u",
              },
            ],
          },
          {
            title: "Team",
            items: [
              {
                label: "Iury De Moraes",
                href: "https://www.linkedin.com/in/iurycardoso/",
              },
              {
                label: "Matheus Angellos",
                href: "https://www.linkedin.com/in/matheus-angellos-b2453297/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} S4U.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
