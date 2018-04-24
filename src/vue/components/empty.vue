<template>
  <aside class="bmui-empty">
    <i class="bmui-empty-img"/>
    <p class="bmui-empty-text">{{ title || '暂无数据' }}</p>
    <button
      class="bmui-empty-btn"
      type="button"
      v-if="btn">{{ btn }}</button>
  </aside>
</template>
<script>
export default {
  name: 'BmuiEmpty',
  props: {
    title: {
      type: String,
      default: ''
    },
    btn: {
      type: String,
      default: ''
    }
  }
}
</script>
