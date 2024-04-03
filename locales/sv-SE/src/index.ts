import {defineLocale, definePlugin, type LocaleDefinition} from 'sanity'

const locale = defineLocale({
  id: 'sv-SE',
  title: 'Svenska',
  bundles: [
    {
      namespace: 'comments',
      resources: () => import('./comments'),
    },

    {
      namespace: 'structure',
      resources: () => import('./structure'),
    },

    {
      namespace: 'studio',
      resources: () => import('./studio'),
    },

    {
      namespace: 'tasks',
      resources: () => import('./tasks'),
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
  weekInfo: {
    firstDay: 1,
    minimalDays: 4,
    weekend: [6, 7],
  },
})

/**
 * Svenska / Swedish locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const svSELocale = definePlugin<{
  title?: string
  weekInfo?: LocaleDefinition['weekInfo']
} | void>((config) => ({
  name: '@sanity/locale-sv-se',
  i18n: {
    locales: [config ? {...locale, ...config} : locale],
  },
}))
