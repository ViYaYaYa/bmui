<template>
  <nav class="bmui-segment">
    <label
      :class="['bmui-segment-item', { 'bmui-segment-active': index === i }]"
      v-for="(item, i) of items">
      <div class="bmui-segment-box">
        <div class="bmui-segment-box2">
          <button
            class="bmui-segment-text"
            @click="change(i)">{{ typeof item === 'string' ? item : item.name }}</button>
          <i
            class="bmui-segment-mark"
            v-if="typeof item.mark === 'number'">{{ item.mark > 99 ? '99+' : item.mark }}</i>
        </div>
      </div>
    </label>
  </nav>
</template>
<script>
export default {
  name: 'BmuiSegment',
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    index: {
      type: Number,
      default: null
    }
  },
  methods: {
    change (index) {
      this.$emit('change', index)
    }
  }
}
</script>
