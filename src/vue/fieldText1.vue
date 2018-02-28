<template>
  <div class="bmui-field_text1" @click="focus">
    <p class="bmui-field_text1-title">{{ title || 'TITLE' }}</p>
    <input class="bmui-field_text1-input" ref="input" :placeholder="placeholder || '请选择'" v-model="valueInside">
    <button v-if="valueInside" class="bmui-field_text1-del" @click="valueInside = ''" />
  </div>
</template>
<script>
export default {
  name: 'BmuiFieldText1',
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
