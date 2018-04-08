<template>
  <ul class="bmui-check_list_right">
    <li v-for="item of items">
      <label
        class="bmui-check_list_right-item"
        :class="{ 'disabled': item.disabled }">
        <span>{{ (typeof item === 'string' ? item : item.name) || 'ITEM' }}</span>
        <input
          class="bmui-check_list_right-input"
          type="checkbox"
          :value="typeof item === 'string' ? item : item.value"
          v-model="valuesInside"
          :disabled="item.disabled">
      </label>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'BmuiCheckListRight',
  props: {
    value: {
      type: Array,
      default: function () {
        return []
      }
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
      valuesInside: []
    }
  },
  watch: {
    valuesInside (v) {
      this.$emit('input', v)
    }
  },
  created () {
    this.valuesInside = this.value.slice()
  }
}
</script>
