<template>
  <ul class="bmui-check_list">
    <li v-for="item of items">
      <label
        class="bmui-check_list-item"
        :class="{ 'bmui-check_list-disabled': item.disabled }">
        <span class="bmui-check_list-text">{{ (typeof item === 'string' ? item : item.name) || 'ITEM' }}</span>
        <input
          class="bmui-check_list-input"
          type="checkbox"
          :value="typeof item === 'string' ? item : item.value"
          v-model="valueInside"
          :disabled="item.disabled">
      </label>
    </li>
  </ul>
</template>
<script>
import MixinInput from 'src/vue/mixins/input'
export default {
  name: 'BmuiCheckListRight',
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
