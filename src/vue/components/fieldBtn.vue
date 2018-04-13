<template>
  <div
    class="bmui-field_btn"
    @click="mixinInputDoFocus">
    <p class="bmui-field_btn-title">{{ title || 'TITLE' }}</p>
    <input
      class="bmui-field_btn-content"
      v-bind="mixinInputProps"
      v-model="valueInside"
      :placeholder="placeholder || '请输入'"
      ref="input">
    <button
      class="bmui-field_btn-btn"
      v-if="!status"
      @click.stop="submit">{{ btn || 'BUTTON' }}</button>
    <i
      :class="`bmui-field_btn-status-${status}`"
      v-if="status"/>
  </div>
</template>
<script>
import MixinInput from 'src/vue/mixins/input'
export default {
  name: 'BmuiFieldBtn',
  mixins: [MixinInput],
  props: {
    title: {
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
    }
  },
  methods: {
    submit () {
      this.$emit('submit')
    }
  }
}
</script>
