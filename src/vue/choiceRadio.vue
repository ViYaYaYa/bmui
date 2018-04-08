<template>
  <div class="bmui-radio">
    <p class="bmui-radio-title">{{ title || 'TITLE' }}</p>
    <p class="bmui-radio-ctrls">
      <label
        class="bmui-radio-ctrl"
        v-for="item of items"
        :class="{ 'bmui-radio-disabled': item.disabled }">
        <input
          class="bmui-radio-input"
          type="radio"
          :value="typeof item === 'string' ? item : item.value"
          v-model="valueInside"
          :disabled="item.disabled"><span>{{ (typeof item === 'string' ? item : item.name) || 'ITEM' }}</span>
      </label>
    </p>
  </div>
</template>
<script>
export default {
  name: 'BmuiRadio',
  props: {
    value: {
      type: [String, Object],
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      valueInside: null
    }
  },
  watch: {
    valueInside (v) {
      this.$emit('input', v)
    }
  },
  created () {
    this.valueInside = this.value
  }
}
</script>
