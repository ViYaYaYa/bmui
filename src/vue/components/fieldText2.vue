<template>
  <div
    class="bmui-field_text2"
    @click="mixinInputDoFocus">
    <p class="bmui-field_text2-title">{{ title || 'TITLE' }}</p>
    <div class="bmui-field_text2-wrap">
      <div
        class="bmui-field_text2-input"
        :class="{ 'bmui-field_text2-empty': !valueInside }"
        v-if="$slots.default"><slot /></div>
      <input
        class="bmui-field_text2-input"
        :class="{ 'bmui-field_text1-empty': !valueInside }"
        v-else
        v-bind="mixinInputProps"
        v-model="valueInside"
        :placeholder="placeholder || '请输入'"
        ref="input">
      <button
        class="bmui-field_text2-del"
        type="button"
        v-if="valueInside"
        @click.stop="valueInside = ''"/>
      <i
        class="bmui-field_text2-arrow"
        v-show="selectable && !valueInside"/>
    </div>
  </div>
</template>
<script>
import MixinInput from 'src/vue/mixins/input'
export default {
  name: 'BmuiFieldText2',
  mixins: [MixinInput],
  props: {
    title: {
      type: String,
      default: ''
    },
    selectable: {
      type: Boolean,
      default: false
    }
  }
}
</script>
