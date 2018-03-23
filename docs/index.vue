<template>
  <div>
    <h2>cell</h2>
    <div class="wrap">
      <bmui-cell-arrow1 title="cell-arrow1" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut magni perferendis rem hic quam, sunt cum, culpa inventore obcaecati at harum nam eaque fugit fuga perspiciatis. Illum, nihil voluptatibus." />
      <bmui-cell-arrow2 title="cell-arrow2" />
      <bmui-cell-text title="cell-text" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur aut debitis nihil distinctio dolorum repudiandae laborum aliquid sapiente, totam culpa sint reiciendis modi dolor quasi dolorem iusto atque error qui." />
      <bmui-cell-paragraph title="cell-paragraph" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit commodi corporis repellendus ipsum aliquid asperiores rerum quos. Aliquam, non nam alias eveniet, voluptate, maxime facere dolor provident rem recusandae excepturi." />
    </div>
    <h2>choice</h2>
    <div class="wrap">
      <bmui-radio title="radio" :items="radio" v-model="radioModel" />
      <bmui-radio-list :items="radioList" v-model="radioListModel" />
      <bmui-check-list-left :items="checkListLeft" v-model="checkListLeftModel" />
      <bmui-check-list-right :items="checkListRight" v-model="checkListRightModel" />
      <bmui-selector :item="selector1" @change="selectorChange" />
      <bmui-selector :item="selector2" :disabled="selector2Disabled" @change="selectorChange" />
    </div>
    <h2>field</h2>
    <div class="wrap">
      <bmui-field-arrow1 title="field-arrow1"/>
      <bmui-field-arrow2 title="field-arrow2" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed veritatis eveniet magnam animi atque natus dolorum ex a tenetur commodi earum ducimus, voluptatibus corrupti amet, ad autem praesentium optio tempora?" />
      <bmui-field-text1 title="field-text1" v-model="fieldText1Model" />
      <bmui-field-text2 title="field-text2" v-model="fieldText2Model" />
      <bmui-field-paragraph maxlength="100" v-model="fieldParagraph" />
      <bmui-field-btn title="field-btn" @submit="fieldBtn" :status="fieldStatus" />
      <bmui-field-btn title="field-btn" @submit="fieldBtn" status="loading" />
    </div>
    <h2>searchbox</h2>
    <div class="wrap">
      <bmui-searchbox v-model="searchbox" placeholder="placeholder" @submit="searchboxEmpty = true" />
      <bmui-searchbox-empty v-if="searchboxEmpty" />
    </div>
    <h2>segment</h2>
    <div class="wrap">
      <bmui-segment :items="segment" :index="segmentIndex" @change="segmentChange" />
    </div>
    <h2>empty</h2>
    <div class="wrap">
      <bmui-empty btn="按钮要监听组件click.native事件" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      radio: ['111', { name: '选项2', value: '222' }, { name: '禁用选项', value: '333', disabled: true }, '444', '555'],
      radioModel: '',
      radioList: ['radio-list', { name: '选项', value: '222', disabled: true }, '选项很长很长很长很长很长很长很长很长很长很长很长很长很长'],
      radioListModel: '',
      checkListLeft: ['check-list-left', '222', { name: '选项名称', value: '333', disabled: true }],
      checkListLeftModel: [],
      checkListRight: ['check-list-right', '222', { name: '选项名称超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长', value: '333', disabled: true }],
      checkListRightModel: [],
      selector1: '选项1',
      selector2: { name: '选项2的名称', value: '222' },
      selector2Disabled: true,
      fieldText1Model: '',
      fieldText2Model: '',
      fieldParagraph: '',
      fieldStatus: '',
      searchbox: 'searchbox',
      searchboxEmpty: false,
      segment: ['标题1', { name: '标题2带值', value: '333', mark: 999 }, '标题3'],
      segmentIndex: 2
    }
  },
  methods: {
    selectorChange (res) {
      console.log(res)
    },
    fieldBtn () {
      this.fieldStatus = 'loading'
      setTimeout(() => {
        this.fieldStatus = 'success'
      }, 1000)
      setTimeout(() => {
        this.fieldStatus = 'warning'
      }, 2000)
      setTimeout(() => {
        this.fieldStatus = 'fail'
      }, 3000)
      setTimeout(() => {
        this.fieldStatus = ''
      }, 4000)
    },
    segmentChange (index) {
      this.segmentIndex = index
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
