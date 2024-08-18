import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SmartHomeShop",
  description: "SmartHomeShop documentation",
  lastUpdated: true,
  cleanUrls: false,
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      head: [['link', { rel: 'icon', href: '/favicon-32x32.png' }]],
      themeConfig: {
        sidebar: [
          {
            text: 'P1MeterKit',
            collapsed: true,
            items: [
              { text: 'Overview', link: 'p1meterkit' },
              { text: 'Installation', link: 'p1meterkit/installation' },
              { text: 'Usage', link: '/en/p1meterkit/usage' },
              { text: 'Troubleshooting', link: '/en/p1meterkit/troubleshooting' },
              { text: 'Technical Specifications', link: '/en/p1meterkit/technical-specifications' },
              { text: 'Warranty and Support', link: '/en/p1meterkit/warranty-and-support' },
            ]
          },
          {
            text: 'UltimateSensor',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/en/ultimatesensor' },
              { text: 'Installation', link: '/en/ultimatesensor/installation' },
              { text: 'Usage', link: '/en/ultimatesensor/usage' },
              { text: 'Troubleshooting', link: '/en/ultimatesensor/troubleshooting' },
              { text: 'Technical Specifications', link: '/en/ultimatesensor/technical-specifications' },
              { text: 'Calibration', link: '/en/ultimatesensor/calibration' },
              { text: 'Warranty and Support', link: '/en/ultimatesensor/warranty-and-support' },
              { text: 'Firmware', link: '/en/ultimatesensor/firmware' },
            ]
          },
          {
            text: 'UltimateSensor Mini',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/en/ultimatesensor-mini' },
              { text: 'Installation', link: '/en/ultimatesensor-mini/installation' },
              { text: 'Usage', link: '/en/ultimatesensor-mini/usage' },
              { text: 'Troubleshooting', link: '/en/ultimatesensor-mini/troubleshooting' },
              { text: 'Technical Specifications', link: '/en/ultimatesensor-mini/technical-specifications' },
              { text: 'Voice Assistant', link: '/en/ultimatesensor-mini/voice-assistant' },
              { text: 'Calibration', link: '/en/ultimatesensor-mini/calibration' },
              { text: 'Warranty and Support', link: '/en/ultimatesensor-mini/warranty-and-support' },
              { text: 'Firmware', link: '/en/ultimatesensor-mini/firmware' },
            ]
          },
          {
            text: 'WaterFlowKit',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/en/waterflowkit' },
              { text: 'Installation', link: '/en/waterflowkit/installation' },
              { text: 'Usage', link: '/en/waterflowkit/usage' },
              { text: 'Troubleshooting', link: '/en/waterflowkit/troubleshooting' },
              { text: 'Technical Specifications', link: '/en/waterflowkit/technical-specifications' },
              { text: 'Warranty and Support', link: '/en/waterflowkit/warranty-and-support' },
            ]
          },
          {
            text: 'WaterMeterKit V2',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/en/watermeterkit-v2' },
              { text: 'Installation', link: '/en/watermeterkit-v2/installation' },
              { text: 'Usage', link: '/en/watermeterkit-v2/usage' },
              { text: 'Troubleshooting', link: '/en/watermeterkit-v2/troubleshooting' },
              { text: 'Technical Specifications', link: '/en/watermeterkit-v2/technical-specifications' },
              { text: 'Warranty and Support', link: '/en/watermeterkit-v2/warranty-and-support' },
            ]
          },
          {
            text: 'WaterP1MeterKit V2',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/en/waterp1meterkit-v2' },
              { text: 'Installation', link: '/en/waterp1meterkit-v2/installation' },
              { text: 'Usage', link: '/en/waterp1meterkit-v2/usage' },
              { text: 'Troubleshooting', link: '/en/waterp1meterkit-v2/troubleshooting' },
              { text: 'Technical Specifications', link: '/en/waterp1meterkit-v2/technical-specifications' },
              { text: 'Warranty and Support', link: '/en/waterp1meterkit-v2/warranty-and-support' },
              { text: 'Firmware', link: '/en/waterp1meterkit-v2/firmware' },
            ]
          },
        ],
      }
    },
    nl: {
      label: 'Nederlands',
      lang: 'nl', // optional, will be added  as `lang` attribute on `html` tag
      link: '/nl/', // default /nl/ -- shows on navbar translations menu, can be external
      head: [['link', { rel: 'icon', href: '/favicon-32x32.png' }]],
      themeConfig: {
        sidebar: [
          {
            text: 'P1MeterKit',
            collapsed: true,
            items: [
              { text: 'Overzicht', link: '/nl/p1meterkit' },
              { text: 'Installatie', link: '/nl/p1meterkit/installation' },
              { text: 'Gebruik', link: '/nl/p1meterkit/usage' },
              { text: 'Probleemoplossing', link: '/nl/p1meterkit/troubleshooting' },
              { text: 'Technische Specificaties', link: '/nl/p1meterkit/technical-specifications' },
              { text: 'Garantie en Ondersteuning', link: '/nl/p1meterkit/warranty-and-support' },
            ]
          },
          {
            text: 'UltimateSensor',
            collapsed: true,
            items: [
              { text: 'Overzicht', link: '/nl/ultimatesensor' },
              { text: 'Installatie', link: '/nl/ultimatesensor/installation' },
              { text: 'Gebruik', link: '/nl/ultimatesensor/usage' },
              { text: 'Probleemoplossing', link: '/nl/ultimatesensor/troubleshooting' },
              { text: 'Technische Specificaties', link: '/nl/ultimatesensor/technical-specifications' },
              { text: 'Kalibratie', link: '/nl/ultimatesensor/calibration' },
              { text: 'Garantie en Ondersteuning', link: '/nl/ultimatesensor/warranty-and-support' },
              { text: 'Firmware', link: '/nl/ultimatesensor/firmware' },
            ]
          },
          {
            text: 'UltimateSensor Mini',
            collapsed: true,
            items: [
              { text: 'Overzicht', link: '/nl/ultimatesensor-mini' },
              { text: 'Installatie', link: '/nl/ultimatesensor-mini/installation' },
              { text: 'Gebruik', link: '/nl/ultimatesensor-mini/usage' },
              { text: 'Probleemoplossing', link: '/nl/ultimatesensor-mini/troubleshooting' },
              { text: 'Technische Specificaties', link: '/nl/ultimatesensor-mini/technical-specifications' },
              { text: 'Voice Assistant', link: '/nl/ultimatesensor-mini/voice-assistant' },
              { text: 'Kalibratie', link: '/nl/ultimatesensor-mini/calibration' },
              { text: 'Garantie en Ondersteuning', link: '/nl/ultimatesensor-mini/warranty-and-support' },
              { text: 'Firmware', link: '/nl/ultimatesensor-mini/firmware' },
            ]
          },
          {
            text: 'WaterFlowKit',
            collapsed: true,
            items: [
              { text: 'Overzicht', link: '/nl/waterflowkit' },
              { text: 'Installatie', link: '/nl/waterflowkit/installation' },
              { text: 'Gebruik', link: '/nl/waterflowkit/usage' },
              { text: 'Probleemoplossing', link: '/nl/waterflowkit/troubleshooting' },
              { text: 'Technische Specificaties', link: '/nl/waterflowkit/technical-specifications' },
              { text: 'Garantie en Ondersteuning', link: '/nl/waterflowkit/warranty-and-support' },
            ]
          },
          {
            text: 'WaterMeterKit V2',
            collapsed: true,
            items: [
              { text: 'Overzicht', link: '/nl/watermeterkit-v2' },
              { text: 'Installatie', link: '/nl/watermeterkit-v2/installation' },
              { text: 'Gebruik', link: '/nl/watermeterkit-v2/usage' },
              { text: 'Probleemoplossing', link: '/nl/watermeterkit-v2/troubleshooting' },
              { text: 'Technische Specificaties', link: '/nl/watermeterkit-v2/technical-specifications' },
              { text: 'Garantie en Ondersteuning', link: '/nl/watermeterkit-v2/warranty-and-support' },
            ]
          },
          {
            text: 'WaterP1MeterKit V2',
            collapsed: true,
            items: [
              { text: 'Overzicht', link: '/nl/waterp1meterkit-v2' },
              { text: 'Installatie', link: '/nl/waterp1meterkit-v2/installation' },
              { text: 'Gebruik', link: '/nl/waterp1meterkit-v2/usage' },
              { text: 'Probleemoplossing', link: '/nl/waterp1meterkit-v2/troubleshooting' },
              { text: 'Technische Specificaties', link: '/nl/waterp1meterkit-v2/technical-specifications' },
              { text: 'Garantie en Ondersteuning', link: '/nl/waterp1meterkit-v2/warranty-and-support' },
              { text: 'Firmware', link: '/nl/waterp1meterkit-v2/firmware' },
            ]
          }
        ],
      }
      // other locale specific properties...
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/en' },
      {
        text: 'Contact',
        link: 'https://smarthomeshop.io/contact'
      },
      {
        text: 'Discord (Chat support)',
        link: 'https://smarthomeshop.io/discord'
      },
    ],

    editLink: {
      pattern: 'https://github.com/smarthomeshop/smarthomeshopio-docs/edit/main/docs/:path'
    },

    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/orgs/smarthomeshop/repositories' }
    ]
  }
})
