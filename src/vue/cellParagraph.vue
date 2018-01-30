<template>
  <div class="bmui-cell-paragraph">
    <p class="bmui-cell-paragraph-title">{{ title || 'TITLE' }}</p>
    <p class="bmui-cell-paragraph-content">{{ content }}</p>
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
