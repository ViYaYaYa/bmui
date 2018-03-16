<template>
  <div class="bmui-field_text2" @click="focus">
    <p class="bmui-field_text2-title">{{ title || 'TITLE' }}</p>
    <div class="bmui-field_text2-wrap">
      <input class="bmui-field_text2-input" ref="input" :placeholder="placeholder || '请选择'" v-model="valueInside">
      <button v-if="valueInside" class="bmui-field_text2-del" @click="valueInside = ''" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'BmuiFieldText2',
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
