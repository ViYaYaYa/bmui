import CellArrow1 from './cellArrow1.vue'
import CellArrow2 from './cellArrow2.vue'
import CellText from './cellText.vue'
import CellParagraph from './cellParagraph.vue'
import ChoiceRadio from './choiceRadio.vue'
import ChoiceRadioList from './choiceRadioList.vue'
import ChoiceCheckListLeft from './choiceCheckListLeft.vue'
import ChoiceCheckListRight from './choiceCheckListRight.vue'
import ChoiceSelector from './choiceSelector.vue'
// import EmptyPage from './emptyPage'
import Segment from './segment.vue'

export default function install (Vue, options) {
  Vue.component(Segment.name, Segment)
  Vue.component(CellArrow1.name, CellArrow1)
  Vue.component(CellArrow2.name, CellArrow2)
  Vue.component(CellText.name, CellText)
  Vue.component(CellParagraph.name, CellParagraph)
  Vue.component(ChoiceRadio.name, ChoiceRadio)
  Vue.component(ChoiceRadioList.name, ChoiceRadioList)
  Vue.component(ChoiceCheckListLeft.name, ChoiceCheckListLeft)
  Vue.component(ChoiceCheckListRight.name, ChoiceCheckListRight)
  Vue.component(ChoiceSelector.name, ChoiceSelector)
}
