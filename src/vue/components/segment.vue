<template>
  <nav class="bmui-segment">
    <label
      :class="['bmui-segment-item', { 'bmui-segment-active': indexInside === i }]"
      v-for="(item, i) of items">
      <div class="bmui-segment-box">
        <div class="bmui-segment-box2">
          <button
            class="bmui-segment-text"
            type="button"
            @click="indexInside = i">{{ (typeof item === 'string' ? item : item.name) || 'ITEM' }}</button>
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
  data () {
    return {
      indexInside: null
    }
  },
  watch: {
    index (v) {
      this.indexInside = v
    },
    indexInside (v) {
      this.$emit('change', v)
    }
  },
  created () {
    this.indexInside = this.index
  }
}
</script>
