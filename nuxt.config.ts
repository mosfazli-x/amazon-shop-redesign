import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@nuxt/content",
    "@nuxt/scripts",
  ],
    app: {
    head: {
      title: "Amazon redesign",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  ssr:false,
  css: ["~/assets/css/main.css"],
  vite: {    server: {
      watch: {
        usePolling: true,
      },
    },
    plugins: [tailwindcss()],
  },
});
