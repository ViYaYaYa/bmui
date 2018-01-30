// import EmptyPage from './emptyPage'
import Segment from './segment.vue'
import CellArrow1 from './cellArrow1.vue'
import CellArrow2 from './cellArrow2.vue'
import CellText from './cellText.vue'
import CellParagraph from './cellParagraph.vue'

export default function install (Vue, options) {
  Vue.component(Segment.name, Segment)
  Vue.component(CellArrow1.name, CellArrow1)
  Vue.component(CellArrow2.name, CellArrow2)
  Vue.component(CellText.name, CellText)
  Vue.component(CellParagraph.name, CellParagraph)
}
