<template>
  <div
    class="bmui-field_paragraph"
    @click="focus">
    <div class="bmui-field_paragraph-wrap">
      <p class="bmui-field_paragraph-title">{{ title || 'TITLE' }}</p>
      <p
        class="bmui-field_paragraph-count"
        v-if="!countHide">{{ valueInside.length }}/{{ maxlength }}</p>
    </div>
    <textarea
      class="bmui-field_paragraph-input"
      ref="input"
      :maxlength="maxlength || 50"
      :placeholder="placeholder || '请输入'"
      v-model="valueInside"/>
  </div>
</template>
<script>
export default {
  name: 'BmuiFieldParagraph',
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    maxlength: {
      type: [Number, String],
      default: undefined
    },
    countHide: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      valueInside: ''
    }
  },
  watch: {
    value (v) {
      this.update()
    },
    valueInside (v) {
      this.$emit('input', v)
    }
  },
  created () {
    this.update()
  },
  methods: {
    update () {
      this.valueInside = this.value
    },
    focus () {
      this.$refs.input.focus()
    }
  }
}
</script>
