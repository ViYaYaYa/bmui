export default {
  data () {
    return {
      valueInside: '',
      disabledInside: false,
      checkedInside: false
    }
  },
  props: {
    value: {
      default: ''
    },
    disabled: {
      default: false
    },
    checked: {
      default: false
    },
    placeholder: {
      default: ''
    },
    maxlength: {
      default: undefined
    },
    type: {
      default: undefined
    }
  },
  computed: {
    mixinInputProps () {
      return {
        // value: this.value,
        disabled: this.disabled,
        // checked: this.checked,
        placeholder: this.placeholder,
        maxlength: this.maxlength,
        type: this.type
      }
    }
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
  },
  methods: {
    mixinInputDoFocus () {
      let target = this.$refs.input
      if (target && typeof target.focus === 'function') target.focus()
    }
  },
  created () {
    this.valueInside = this.value
    this.disabledInside = !!this.disabled
    this.checkedInside = !!this.checked
  }
}
