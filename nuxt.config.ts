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
