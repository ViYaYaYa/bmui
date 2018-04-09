<template>
  <div class="bmui-cell_arrow2">
    <p class="bmui-cell_arrow2-title">{{ title || 'TITLE' }}</p>
    <i class="bmui-cell_arrow2-icon" />
  </div>
</template>
<script>
export default {
  name: 'BmuiCellArrow2',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
