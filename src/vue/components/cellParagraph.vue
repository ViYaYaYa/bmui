<template>
  <div class="bmui-cell_paragraph">
    <p class="bmui-cell_paragraph-title">{{ title || 'TITLE' }}</p>
    <div
      class="bmui-cell_paragraph-content"
      v-if="$slots.default"><slot /></div>
    <p
      class="bmui-cell_paragraph-content"
      v-else>{{ content }}</p>
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
