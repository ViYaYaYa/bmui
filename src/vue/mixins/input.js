export default {
  data () {
    return {
      valueInside: null,
      disabledInside: false,
      checkedInside: false
    }
  },
  props: {
    value: {
      default: null
    },
    disabled: {
      default: false
    },
    checked: {
      default: false
    }
  },
  created () {
    this.valueInside = this.value
    this.disabledInside = !!this.disabled
    this.checkedInside = !!this.checked
  },
  watch: {
    value (v) {
      this.valueInside = this.value
    },
    disabled (v) {
      this.disabledInside = !!this.disabled
    },
    checked (v) {
      this.checkedInside = !!this.checked
    },
    valueInside (v) {
      this.$emit('input', v)
    },
    checkedInside (v) {
      this.$emit('change', v)
    }
  }
}
