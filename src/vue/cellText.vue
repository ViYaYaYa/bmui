<template>
  <div class="bmui-cell-text">
    <p class="bmui-cell-text-title">{{ title || 'TITLE' }}</p>
    <p class="bmui-cell-text-content">{{ content }}</p>
  </div>
</template>
<script>
export default {
  name: 'BmuiCellText',
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
