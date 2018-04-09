<template>
  <button
    class="bmui-selector"
    :class="{ 'bmui-selector-checked': checkedInside, 'bmui-selector-disabled': disabled }"
    @click="change"
    :disabled="disabled">{{ typeof item === 'string' ? item : item.name || 'ITEM' }}</button>
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
    change () {
      if (!this.disabled) {
        this.checkedInside = !this.checkedInside
        this.$emit('change', {
          item: typeof this.item === 'string' ? this.item : this.item.value,
          checked: this.checkedInside
        })
      }
    }
  }
}
</script>
