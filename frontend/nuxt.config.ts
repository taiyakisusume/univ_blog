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
      title: 'Blog made with Nuxt3',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: process.env.APP_BASEURL + '/favicon.ico' },
      ],
    },
    cdnURL: process.env.APP_CDNURL,
    baseURL: process.env.APP_BASEURL,
  },
})
