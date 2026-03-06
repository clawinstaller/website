import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import HomePage from './HomePage.vue'
import HomePageEN from './HomePageEN.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
    app.component('HomePageEN', HomePageEN)
  },
} satisfies Theme
