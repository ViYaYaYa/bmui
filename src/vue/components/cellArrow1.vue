<template>
  <div class="bmui-cell_arrow1">
    <p class="bmui-cell_arrow1-title">{{ title || 'TITLE' }}</p>
    <div
      class="bmui-cell_arrow1-content"
      v-if="$slots.default"><slot /></div>
    <p
      class="bmui-cell_arrow1-content"
      v-else>{{ content }}</p>
    <i class="bmui-cell_arrow1-icon"/>
  </div>
</template>
<script>
export default {
  name: 'BmuiCellArrow1',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>
