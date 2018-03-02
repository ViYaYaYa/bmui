<template>
  <div class="bmui-searchbox_empty">{{ title || '查找不到结果' }}</div>
</template>
<script>
export default {
  name: 'BmuiSearchboxEmpty',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
