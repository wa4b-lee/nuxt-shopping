// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt',],
  css: ['@/assets/css/base.css',],
  compatibilityDate: "2025-03-14",
});