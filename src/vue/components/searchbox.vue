<template>
  <form
    :class="['bmui-searchbox', { 'bmui-searchbox-active': active }]"
    @click="mixinInputDoFocus"
    @submit.prevent="submit">
    <div class="bmui-searchbox-wrap">
      <i class="bmui-searchbox-icon"/>
      <input
        class="bmui-searchbox-content"
        v-bind="mixinInputProps"
        :placeholder="placeholder || '请输入关键字'"
        ref="input"
        type="text"
        @focus="active = true"
        v-model="valueInside">
      <button
        class="bmui-searchbox-del"
        type="button"
        v-if="valueInside"
        @click="valueInside = ''"/>
      <button
        class="bmui-searchbox-submit"
        type="submit"
        @click.stop
        v-if="active && valueInside">确 认</button>
      <button
        class="bmui-searchbox-submit"
        type="button"
        @click.stop="active = false"
        v-if="active && !valueInside">取 消</button>
    </div>
  </form>
</template>
<script>
import MixinInput from 'src/vue/mixins/input'
export default {
  name: 'BmuiSearchbox',
  mixins: [MixinInput],
  data () {
    return {
      active: false
    }
  },
  methods: {
    submit () {
      this.$emit('submit', this.valueInside)
    }
  }
}
</script>
