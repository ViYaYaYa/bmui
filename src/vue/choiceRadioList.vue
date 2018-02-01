<template>
  <ul class="bmui-radio_list">
    <li v-for="item of items">
      <label class="bmui-radio_list-item" :class="{ 'disabled': item.disabled }">
        <input class="bmui-radio_list-input" type="radio" :value="typeof item === 'string' ? item : item.value" v-model="valueInside" :disabled="item.disabled">
        <span>{{ (typeof item === 'string' ? item : item.name) || 'ITEM' }}</span>
      </label>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'BmuiRadioList',
  props: {
    value: {
      type: [String, Object],
      default: null
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
