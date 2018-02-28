<template>
  <ul class="bmui-check_list_left">
    <li v-for="item of items">
      <label class="bmui-check_list_left-item" :class="{ 'disabled': item.disabled }">
        <input class="bmui-check_list_left-input" type="checkbox" :value="typeof item === 'string' ? item : item.value" v-model="valuesInside" :disabled="item.disabled">
        <span>{{ (typeof item === 'string' ? item : item.name) || 'ITEM' }}</span>
      </label>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'BmuiCheckListLeft',
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
