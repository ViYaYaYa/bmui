<template>
  <div>
    <h2>segment</h2>
    <div class="wrap">
      <bmui-segment />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      segment: ['标题1', '标题2', { name: '标题3带值', value: '333', mark: 999 }]
    }
  },
  methods: {}
}
</script>
<style>
  .wrap {
    position: relative;
    border: 1px solid red;
    height: 300px;
  }
</style>
