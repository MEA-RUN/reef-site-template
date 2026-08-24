import { defineNuxtConfig } from 'nuxt/config'

const sourceRepository = process.env.REEF_SOURCE_REPOSITORY

export default defineNuxtConfig({
  extends: ['reef'],

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
