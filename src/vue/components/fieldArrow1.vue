<template>
  <div class="bmui-field_arrow1">
    <p class="bmui-field_arrow1-title">{{ title || 'TITLE' }}</p>
    <p
      class="bmui-field_arrow1-content"
      :class="{ 'bmui-field_arrow1-empty': !content }"
      v-bind="mixinInputProps">{{ content || placeholder || '请选择' }}</p>
    <i class="bmui-field_arrow1-icon"/>
  </div>
</template>
<script>
import MixinInput from 'src/vue/mixins/input'
export default {
  name: 'BmuiFieldArrow1',
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
