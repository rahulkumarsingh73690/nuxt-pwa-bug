// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@kevinmarrec/nuxt-pwa"],
  pwa: {
    workbox: {
      enabled: true,
    },
  },
});
