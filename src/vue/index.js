import CellArrow1 from 'src/vue/components/cellArrow1.vue'
import CellArrow2 from 'src/vue/components/cellArrow2.vue'
import CellText from 'src/vue/components/cellText.vue'
import CellParagraph from 'src/vue/components/cellParagraph.vue'
import ChoiceRadio from 'src/vue/components/choiceRadio.vue'
import ChoiceRadioList from 'src/vue/components/choiceRadioList.vue'
import ChoiceCheckListLeft from 'src/vue/components/choiceCheckListLeft.vue'
import ChoiceCheckListRight from 'src/vue/components/choiceCheckListRight.vue'
import ChoiceSelector from 'src/vue/components/choiceSelector.vue'
import FieldArrow1 from 'src/vue/components/fieldArrow1.vue'
import FieldArrow2 from 'src/vue/components/fieldArrow2.vue'
import FieldText1 from 'src/vue/components/fieldText1.vue'
import FieldText2 from 'src/vue/components/fieldText2.vue'
import FieldParagraph from 'src/vue/components/fieldParagraph.vue'
import FieldBtn from 'src/vue/components/fieldBtn.vue'
import Searchbox from 'src/vue/components/searchbox.vue'
import SearchboxEmpty from 'src/vue/components/searchboxEmpty.vue'
import Segment from 'src/vue/components/segment.vue'
import Empty from 'src/vue/components/empty.vue'

export function install (Vue) {
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
  Vue.component(FieldArrow1.name, FieldArrow1)
  Vue.component(FieldArrow2.name, FieldArrow2)
  Vue.component(FieldText1.name, FieldText1)
  Vue.component(FieldText2.name, FieldText2)
  Vue.component(FieldParagraph.name, FieldParagraph)
  Vue.component(FieldBtn.name, FieldBtn)
  Vue.component(Searchbox.name, Searchbox)
  Vue.component(SearchboxEmpty.name, SearchboxEmpty)
  Vue.component(Empty.name, Empty)
}

export default { install }
