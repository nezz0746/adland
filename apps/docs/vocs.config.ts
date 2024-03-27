import { defineConfig } from "vocs";

export default defineConfig({
  title: "AdLand",
  sidebar: [
    {
      text: "What is Adland ?",
      link: "/what-is-adland",
    },
    {
      text: "Use cases",
      collapsed: true,
      items: [
        {
          text: "Offchain: Display Ads",
          link: "/use-cases/web-ads",
        },
        {
          text: "Offchain: Social Media Ads",
          link: "/use-cases/social-media-ads",
        },
      ],
    },
  ],
});
