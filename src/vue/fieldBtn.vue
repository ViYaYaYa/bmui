<template>
  <div class="bmui-field_btn" @click="focus">
    <p class="bmui-field_btn-title">{{ title || 'TITLE' }}</p>
    <input class="bmui-field_btn-content" :type="type || 'text'" @change="$emit('change', $event)" :maxlength="maxlength" v-model="valueInside" :placeholder="placeholder || '请输入'" ref="input">
    <button class="bmui-field_btn-btn" v-if="!status" @click.stop="submit">{{ btn || 'BUTTON' }}</button>
    <i :class="`bmui-field_btn-status-${status}`" v-if="status"/>
  </div>
</template>
<script>
export default {
  name: 'BmuiFieldBtn',
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
    btn: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    maxlength: {
      type: [Number, String],
      default: null
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
    },
    submit () {
      this.$emit('submit')
    }
  }
}
</script>
