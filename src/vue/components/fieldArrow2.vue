<template>
  <div class="bmui-field_arrow2">
    <p class="bmui-field_arrow2-title">{{ title || 'TITLE' }}</p>
    <div class="bmui-field_arrow2-wrap">
      <p
        class="bmui-field_arrow2-content"
        :class="{ 'bmui-field_arrow2-empty': !content }">{{ content || '请选择' }}</p>
      <i class="bmui-field_arrow2-icon"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BmuiFieldArrow2',
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
