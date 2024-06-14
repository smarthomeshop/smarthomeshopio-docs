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
      { text: 'Products', link: '/watermeterkit-v2/' },
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
        text: 'WaterMeterKit V2',
        link: '/watermeterkit-v2/',
        collapsible: true,
        children: [
          '/watermeterkit-v2/README.md',
          '/watermeterkit-v2/installation.md',
          '/watermeterkit-v2/usage.md',
          '/watermeterkit-v2/troubleshooting.md',
          '/watermeterkit-v2/technical-specifications.md',
          '/watermeterkit-v2/warranty-and-support.md'
        ]
      },
      {
        text: 'WaterP1MeterKit V2',
        link: '/waterp1meterkit-v2/',
        collapsible: true,
        children: [
          '/waterp1meterkit-v2/README.md',
          '/waterp1meterkit-v2/installation.md',
          '/waterp1meterkit-v2/usage.md',
          '/waterp1meterkit-v2/troubleshooting.md',
          '/waterp1meterkit-v2/technical-specifications.md',
          '/waterp1meterkit-v2/warranty-and-support.md'
        ]
      },
      {
        text: 'WaterFlowKit',
        link: '/waterflowkit/',
        collapsible: true,
        children: [
          '/waterflowkit/README.md',
          '/waterflowkit/installation.md',
          '/waterflowkit/usage.md',
          '/waterflowkit/troubleshooting.md',
          '/waterflowkit/technical-specifications.md',
          '/waterflowkit/warranty-and-support.md'
        ]
      },
      {
        text: 'UltimateSensor Mini',
        link: '/ultimatesensor-mini/',
        collapsible: true,
        children: [
          '/ultimatesensor-mini/README.md',
          '/ultimatesensor-mini/installation.md',
          '/ultimatesensor-mini/usage.md',
          '/ultimatesensor-mini/calibration.md',
          '/ultimatesensor-mini/voice-assistant.md',
          '/ultimatesensor-mini/troubleshooting.md',
          '/ultimatesensor-mini/technical-specifications.md',
          '/ultimatesensor-mini/warranty-and-support.md'
        ]
      },
      {
        text: 'P1MeterKit',
        link: '/p1meterkit/',
        collapsible: true,
        children: [
          '/p1meterkit/README.md',
          '/p1meterkit/installation.md',
          '/p1meterkit/usage.md',
          '/p1meterkit/troubleshooting.md',
          '/p1meterkit/technical-specifications.md',
          '/p1meterkit/warranty-and-support.md'
        ]
      },
      
    ],
  }),

  bundler: viteBundler(),
})