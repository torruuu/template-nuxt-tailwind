import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  // Remove the following property to use typescript eslint
  eslint: {
    config: {
      typescript: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  compatibilityDate: '2024-11-01',
})
