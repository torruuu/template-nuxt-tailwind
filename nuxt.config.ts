import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    // @ts-expect-error - tailwindcss is a valid plugin
    plugins: [tailwindcss()],
  },
  typescript: {
    typeCheck: true,
  },
  compatibilityDate: '2026-02-27',
})
