<template>
  <div class="bmui-field_arrow1">
    <p class="bmui-field_arrow1-title">{{ title || 'TITLE' }}</p>
    <p
      class="bmui-field_arrow1-content"
      :class="{ 'bmui-field_arrow1-empty': !content }">{{ content || '请选择' }}</p>
    <i class="bmui-field_arrow1-icon"/>
  </div>
</template>
<script>
export default {
  name: 'BmuiFieldArrow1',
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
