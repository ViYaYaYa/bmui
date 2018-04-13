<template>
  <div
    class="bmui-field_paragraph"
    @click="mixinInputDoFocus">
    <div class="bmui-field_paragraph-wrap">
      <p class="bmui-field_paragraph-title">{{ title || 'TITLE' }}</p>
      <p
        class="bmui-field_paragraph-count"
        v-if="maxlength">{{ valueInside.length }}/{{ maxlength }}</p>
    </div>
    <textarea
      class="bmui-field_paragraph-input"
      v-bind="mixinInputProps"
      v-model="valueInside"
      :placeholder="placeholder || '请输入'"
      ref="input"/>
  </div>
</template>
<script>
import MixinInput from 'src/vue/mixins/input'
export default {
  name: 'BmuiFieldParagraph',
  mixins: [MixinInput],
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
