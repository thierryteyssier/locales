import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'dk',
  title: 'Dansk',
  bundles: [
    {
      namespace: 'structure',
      resources: () => import('./structure'),
    },

    {
      namespace: 'studio',
      resources: () => import('./studio'),
    },

    {
      namespace: 'validation',
      resources: () => import('./validation'),
    },

    {
      namespace: 'vision',
      resources: () => import('./vision'),
    },
  ],
})

/**
 * Dansk locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const dkLocale = definePlugin({
  name: '@sanity/locale-dk',
  i18n: {
    locales: [locale],
  },
})
