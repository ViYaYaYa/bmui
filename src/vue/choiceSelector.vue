<template>
  <button class="bmui-selector" :class="{ 'bmui-selector-checked': checkedInside, 'bmui-selector-disabled': disabled }" @click="change" :disabled="disabled">{{ typeof item === 'string' ? item : item.name || 'ITEM' }}</button>
</template>
<script>
export default {
  name: 'BmuiSelector',
  props: {
    item: {
      type: [String, Object],
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      checkedInside: false,
      disabledInside: false
    }
  },
  watch: {
    checked () {
      this.update()
    }
  },
  created () {
    this.update()
  },
  methods: {
    update () {
      this.checkedInside = this.checked
      this.disabledInside = this.disabled
    },
    change () {
      // this.checkedInside = !this.checkedInside
      this.$emit('change', {
        item: this.item,
        checked: !this.checkedInside
      })
    }
  }
}
</script>
