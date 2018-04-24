<template>
  <div class="bmui-field_arrow2">
    <p class="bmui-field_arrow2-title">{{ title || 'TITLE' }}</p>
    <div class="bmui-field_arrow2-wrap">
      <p
        class="bmui-field_arrow2-content"
        :class="{ 'bmui-field_arrow2-empty': !content }">{{ content || placeholder || '请选择' }}</p>
      <i class="bmui-field_arrow2-icon"/>
    </div>
  </div>
</template>
<script>
import MixinInput from 'src/vue/mixins/input'
export default {
  name: 'BmuiFieldArrow2',
  mixins: [MixinInput],
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>
