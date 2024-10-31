export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-10-30',
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
