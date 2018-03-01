<template>
  <div :class="['bmui-searchbox', { 'bmui-searchbox-active': active }]" @click="focus">
    <i class="bmui-searchbox-icon"/>
    <input class="bmui-searchbox-content" ref="input" type="text" @focus="active = true" v-model="valueInside">
    <button class="bmui-searchbox-del" @click.stop v-if="valueInside" @click="valueInside = ''" />
    <button class="bmui-searchbox-submit" @click.stop="submit" v-if="active && valueInside">确 认</button>
    <button class="bmui-searchbox-submit" @click.stop="active = false" v-if="active && !valueInside">取 消</button>
  </div>
</template>
<script>
export default {
  name: 'BmuiSearchbox',
  props: {
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
      active: false,
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
    },
    submit () {
      this.$emit('submit', this.valueInside)
    }
  }
}
</script>
