import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'SmartHomeShop Documentation',
  description: 'Comprehensive guides for all SmartHomeShop products',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'SmartHomeShop Documentation',
      description: 'Comprehensive guides for all SmartHomeShop products',
      selectLanguageName: 'English',
    },
    '/nl/': {
      lang: 'nl-NL',
      title: 'SmartHomeShop Documentatie',
      description: 'Uitgebreide handleidingen voor alle SmartHomeShop producten',
      selectLanguageName: 'Nederlands',
    },
  },

  theme: defaultTheme({
    docsBranch: 'main',
    docsRepo: 'smarthomeshop/smarthomeshopio-docs',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Improve this page on GitHub',
    lastUpdated: true,
    lastUpdatedText: 'Last updated',
    
    logo: './visuals/smarthomeshop.svg',
    
    locales: {
      '/': {
        lang: 'en-US',
        title: 'SmartHomeShop Documentation',
        description: 'Comprehensive guides for all SmartHomeShop products',
        selectLanguageName: 'English',
      },
      '/nl/': {
        lang: 'nl-NL',
        title: 'SmartHomeShop Documentatie',
        description: 'Uitgebreide handleidingen voor alle SmartHomeShop producten',
        selectLanguageName: 'Nederlands',
      },
    },

    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Products', link: '/watermeterkit/' },
      {
        text: 'Contact',
        link: 'https://smarthomeshop.io/contact'
      },
      {
        text: 'Discord',
        link: 'https://smarthomeshop.io/discord'
      },
    ],

    repo: 'smarthomeshop/smarthomeshopio-docs',

    sidebar: [
      {
        text: 'WaterMeterKit',
        link: '/watermeterkit/',
        collapsible: true,
        children: [
          '/watermeterkit/README.md',
          '/watermeterkit/installation.md',
          '/watermeterkit/usage.md',
          '/watermeterkit/troubleshooting.md',
          '/watermeterkit/technical-specifications.md',
          '/watermeterkit/warranty-and-support.md'
        ]
      },
      {
        text: 'WaterP1MeterKit',
        link: '/waterp1meterkit/',
        collapsible: true,
        children: [
          '/waterp1meterkit/README.md',
          '/waterp1meterkit/installation.md',
          '/waterp1meterkit/usage.md',
          '/waterp1meterkit/troubleshooting.md',
          '/waterp1meterkit/technical-specifications.md',
          '/waterp1meterkit/warranty-and-support.md'
        ]
      }
    ],
  }),

  bundler: viteBundler(),
})