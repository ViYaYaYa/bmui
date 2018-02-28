<template>
  <div class="bmui-cell_paragraph">
    <p class="bmui-cell_paragraph-title">{{ title || 'TITLE' }}</p>
    <p class="bmui-cell_paragraph-content">{{ content }}</p>
  </div>
</template>
<script>
export default {
  name: 'BmuiCellParagraph',
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
