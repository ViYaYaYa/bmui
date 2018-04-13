<template>
  <div
    class="bmui-field_text1"
    @click="mixinInputDoFocus">
    <p class="bmui-field_text1-title">{{ title || 'TITLE' }}</p>
    <input
      class="bmui-field_text1-input"
      v-bind="mixinInputProps"
      v-model="valueInside"
      :placeholder="placeholder || '请选择'"
      ref="input">
    <button
      v-if="valueInside"
      class="bmui-field_text1-del"
      @click="valueInside = ''"/>
  </div>
</template>
<script>
import MixinInput from 'src/vue/mixins/input'
export default {
  name: 'BmuiFieldText1',
  mixins: [MixinInput],
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
