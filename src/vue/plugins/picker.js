import Vue from 'vue'
import PickerComp from 'src/vue/components/picker.vue'

const Picker = Vue.extend(PickerComp)

let instance
let container

export default {
  open (list, value, config) {
    if (instance) return
    container = (config && config.container) || document.body
    instance = new Picker({
      el: document.createElement('div'),
      list,
      value,
      config
    })
    container.appendChild(instance.$el)
  },
  close () {
    if (instance) {
      container.removeChild(instance.$el)
      instance = null
      container = null
    }
  }
}
