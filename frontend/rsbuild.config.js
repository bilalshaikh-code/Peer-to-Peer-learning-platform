// @ts-check
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: "Peer-to-Peer Learning Platform",
    tags: [{
      tag: "link",
      attrs: { 
        href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css",
        rel: "stylesheet",
      },
    }],
    // titleByEntries: {
    //   home: "Home - My App",
    //   about: "About Us - My App",
    // },
  },
});
