<template>
  <div class="bmui-cell-arrow1">
    <p class="bmui-cell-arrow1-title">{{ title || 'TITLE' }}</p>
    <p class="bmui-cell-arrow1-content">{{ content }}</p>
    <i class="bmui-cell-arrow1-icon"/>
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
