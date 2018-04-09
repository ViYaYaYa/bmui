<template>
  <ul class="bmui-radio_list">
    <li v-for="item of items">
      <label
        class="bmui-radio_list-item"
        :class="{ 'bmui-radio_list-disabled': item.disabled }">
        <input
          class="bmui-radio_list-input"
          type="radio"
          :value="typeof item === 'string' ? item : item.value"
          v-model="valueInside"
          :disabled="item.disabled">{{ (typeof item === 'string' ? item : item.name) || 'ITEM' }}
      </label>
    </li>
  </ul>
</template>
<script>
import MixinInput from 'src/vue/mixins/input'
export default {
  name: 'BmuiRadioList',
  mixins: [MixinInput],
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>
