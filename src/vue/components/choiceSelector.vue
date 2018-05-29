<template>
  <button
    class="bmui-selector"
    :class="{ 'bmui-selector-checked': checkedInside, 'bmui-selector-disabled': disabled }"
    @click="click"
    type="button"
    v-bind="mixinInputProps"
    :disabled="disabled">{{ (typeof item === 'string' ? item : item.name) || 'ITEM' }}</button>
</template>
<script>
import MixinInput from 'src/vue/mixins/input'
export default {
  name: 'BmuiSelector',
  mixins: [MixinInput],
  props: {
    item: {
      type: [String, Object],
      default: ''
    }
  },
  methods: {
    click () {
      this.$emit('click', {
        item: typeof this.item === 'string' ? this.item : this.item.value,
        checked: !this.checkedInside
      })
    }
  }
}
</script>
