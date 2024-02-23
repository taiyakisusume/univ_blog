// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    server: {
      hmr: {
        clientPort: 24678 // 明示的に宣言しとかないとundefinedになる
      }
    }
  },
  app: {
    head: {
      title: 'Jamstack Blog',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: process.env.APP_CDNURL + '/favicon.ico' },
      ],
    },
    cdnURL: process.env.APP_CDNURL,
    baseURL: process.env.APP_BASEURL,
  },
  modules: ["nuxt-microcms-module"],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
})
