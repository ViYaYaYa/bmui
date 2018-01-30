<template>
  <div>
    <h2>cell</h2>
    <div class="wrap">
      <bmui-cell-arrow1 title="cell-arrow1" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut magni perferendis rem hic quam, sunt cum, culpa inventore obcaecati at harum nam eaque fugit fuga perspiciatis. Illum, nihil voluptatibus." />
      <bmui-cell-arrow2 title="cell-arrow2" />
      <bmui-cell-text title="cell-text" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur aut debitis nihil distinctio dolorum repudiandae laborum aliquid sapiente, totam culpa sint reiciendis modi dolor quasi dolorem iusto atque error qui." />
      <bmui-cell-paragraph title="cell-paragraph" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit commodi corporis repellendus ipsum aliquid asperiores rerum quos. Aliquam, non nam alias eveniet, voluptate, maxime facere dolor provident rem recusandae excepturi." />
    </div>
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
  }
}
</script>
<style>
  .wrap {
    position: relative;
    border: 1px solid red;
    height: 300px;
    overflow: auto;
  }
</style>
