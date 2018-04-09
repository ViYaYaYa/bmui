<template>
  <div class="bmui-cell_text">
    <p class="bmui-cell_text-title">{{ title || 'TITLE' }}</p>
    <p class="bmui-cell_text-content">{{ content }}</p>
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
