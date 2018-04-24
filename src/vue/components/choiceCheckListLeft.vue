<template>
  <ul class="bmui-check_list">
    <li v-for="item of items">
      <label
        class="bmui-check_list-item"
        :class="{ 'bmui-check_list-disabled': item.disabled }">
        <input
          class="bmui-check_list-input"
          v-bind="mixinInputProps"
          type="checkbox"
          :value="typeof item === 'string' ? item : item.value"
          v-model="valueInside"
          :disabled="item.disabled">
        <span class="bmui-check_list-text">{{ (typeof item === 'string' ? item : item.name) || 'ITEM' }}</span>
      </label>
    </li>
  </ul>
</template>
<script>
import MixinInput from 'src/vue/mixins/input'
export default {
  name: 'BmuiCheckListLeft',
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
