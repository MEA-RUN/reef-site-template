import { defineNuxtConfig } from 'nuxt/config'

const sourceRepository = process.env.REEF_SOURCE_REPOSITORY

export default defineNuxtConfig({
  extends: ['reef'],

  modules: ['@nuxtjs/i18n'],

  i18n: {
    defaultLocale: 'fr',
    locales: [
      { code: 'fr', name: 'Français' },
      { code: 'en', name: 'English' },
    ],
  },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },

  appConfig: {
    github: {
      url: sourceRepository ? `https://github.com/${sourceRepository}` : undefined,
      branch: 'main',
      contentDir: 'subjects',
    },
  },

  experimental: {
    payloadExtraction: false,
  },
})
