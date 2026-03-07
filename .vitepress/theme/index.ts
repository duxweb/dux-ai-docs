import { h } from 'vue'
import theme from '@duxweb/vitepress-theme'
import '@duxweb/vitepress-theme/dist/index.css'
import './style.css'
import HomeAdvantageCards from './components/HomeAdvantageCards.vue'
import ScenarioCards from './components/ScenarioCards.vue'

export default {
  extends: theme,
  Layout: () => h(theme.Layout),
  enhanceApp({ app }) {
    app.component('HomeAdvantageCards', HomeAdvantageCards)
    app.component('ScenarioCards', ScenarioCards)
  },
}
