/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        dark: false,
        colors: {
          background: "#f4edeb",
          red: '#c73a0f',
          green: '#1ea475',
          'rose-50': '#fcf9f7',
          'rose-100': '#f4edeb',
          'rose-300': '#c9aea6',
          'rose-400': '#ad8985',
          'rose-500': '#87635a',
          'rose-900': '#260f08'
        }
      }
    }
  }
})
