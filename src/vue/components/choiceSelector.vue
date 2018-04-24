<template>
  <button
    class="bmui-selector"
    :class="{ 'bmui-selector-checked': choiceCheckedInside, 'bmui-selector-disabled': disabled }"
    @click="choiceCheckedInside = !choiceCheckedInside"
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
  data () {
    return {
      choiceCheckedInside: false
    }
  },
  watch: {
    value (v) {
      this.choiceCheckedInside = !!v
    },
    choiceCheckedInside (v) {
      this.$emit('change', {
        item: typeof this.item === 'string' ? this.item : this.item.value,
        checked: v
      })
      this.$emit('input', v)
    }
  },
  created () {
    this.choiceCheckedInside = !!this.value
  }
}
</script>
