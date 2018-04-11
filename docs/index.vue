<template>
  <div class="m_page">
    <div class="m_category">
      <h2>分类</h2>
      <ul>
        <li>cell</li>
        <li>choice</li>
        <li>field</li>
        <li>searchbox</li>
        <li>segment</li>
        <li>empty</li>
      </ul>
    </div>
    <readme
      class="m_readme"
      @change="setCurrHash"/>
    <div class="m_preview">
      <div
        class="wrap"
        v-if="!currHash || currHash === 'cell'">
        <bmui-cell-arrow1
          title="cell-arrow1"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut magni perferendis rem hic quam, sunt cum, culpa inventore obcaecati at harum nam eaque fugit fuga perspiciatis. Illum, nihil voluptatibus." />
        <bmui-cell-arrow2 title="cell-arrow2" />
        <bmui-cell-text
          title="cell-text"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur aut debitis nihil distinctio dolorum repudiandae laborum aliquid sapiente, totam culpa sint reiciendis modi dolor quasi dolorem iusto atque error qui." />
        <bmui-cell-paragraph
          title="cell-paragraph"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit commodi corporis repellendus ipsum aliquid asperiores rerum quos. Aliquam, non nam alias eveniet, voluptate, maxime facere dolor provident rem recusandae excepturi." />
      </div>
      <div
        class="wrap"
        v-if="!currHash || currHash === 'choice'">
        <bmui-radio
          title="radio"
          :items="['111', { name: '选项2', value: '222' }, { name: '禁用选项', value: '333', disabled: true }, '444', '555']"
          v-model="radioModel"/>
        <bmui-radio-list
          :items="['radio-list', { name: '选项', value: '222', disabled: true }, '选项很长很长很长很长很长很长很长很长很长很长很长很长很长']"
          v-model="radioListModel" />
        <bmui-check-list-left
          :items="['check-list-left', '222', { name: '选项名称', value: '333', disabled: true }]"
          v-model="checkListLeftModel" />
        <bmui-check-list-right
          :items="['check-list-right', '222', { name: '选项名称超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长', value: '333', disabled: true }]"
          v-model="checkListRightModel" />
        <bmui-selector
          :item="'选项1'"
          v-model="selector"
          @change="selectorChange" />
        <bmui-selector
          :item="{ name: '选项2的名称', value: '222' }"
          :disabled="true" />
      </div>
      <div
        class="wrap"
        v-if="!currHash || currHash === 'field'">
        <bmui-field-arrow1 title="field-arrow1"/>
        <bmui-field-arrow2
          title="field-arrow2"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed veritatis eveniet magnam animi atque natus dolorum ex a tenetur commodi earum ducimus, voluptatibus corrupti amet, ad autem praesentium optio tempora?" />
        <bmui-field-text1
          title="field-text1"
          v-model="fieldText1Model" />
        <bmui-field-text2
          title="field-text2"
          v-model="fieldText2Model" />
        <bmui-field-paragraph
          maxlength="100"
          v-model="fieldParagraph" />
        <bmui-field-btn
          title="field-btn"
          @change="fieldBtnChange"
          @submit="fieldBtn"
          :status="fieldStatus" />
        <bmui-field-btn
          title="field-btn"
          type="password"
          maxlength="8"
          @submit="fieldBtn"
          status="loading" />
      </div>
      <div
        class="wrap"
        v-if="!currHash || currHash === 'searchbox'">
        <bmui-searchbox
          v-model="searchbox"
          placeholder="placeholder"
          @submit="searchboxEmpty = true" />
        <bmui-searchbox-empty v-if="searchboxEmpty" />
      </div>
      <div
        class="wrap"
        v-if="!currHash || currHash === 'segment'">
        <bmui-segment
          :items="segment"
          :index="segmentIndex"
          @change="segmentChange" />
      </div>
      <div
        class="wrap"
        v-if="!currHash || currHash === 'empty'">
        <bmui-empty btn="按钮要监听组件click.native事件" />
      </div>
    </div>
  </div>
</template>
<script>
import CompReadme from './readme.vue'
export default {
  components: {
    'Readme': CompReadme
  },
  data () {
    return {
      currHash: '',
      radioModel: '',
      radioListModel: '',
      checkListLeftModel: [],
      checkListRightModel: [],
      selector: '',
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
    setCurrHash (hash) {
      this.currHash = hash
    },
    selectorChange (res) {
      console.log(res)
    },
    fieldBtnChange (ev) {
      console.log(ev)
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
<style scoped>
  @media screen and (max-width: 1023px) {
    .m_category {
      display: none;
    }
    .m_readme {
      position: static;
    }
    .m_preview {
      display: none;
    }
  }
  @media screen and (min-width: 1024px) {
    .m_category {
      position: absolute;
      left: 0;
      top: 0;
      width: 150px;
      height: 100%;
      overflow: auto;
    }
    .m_readme {
      position: absolute;
      top: 0;
      left: 150px;
      right: 320px;
      height: 100%;
      overflow: auto;
    }
    .m_preview {
      position: absolute;
      right: 0;
      top: 0;
      height: 568px;
      width: 320px;
      overflow: auto;
    }
  }
  .m_page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
  }
  .m_category {
    position: absolute;
    height: 100%;
    overflow: auto;
  }
  .m_readme {
    position: absolute;
    overflow: auto;
  }
  .m_preview {
    background-color: #f8f8f8;
    border: 1px solid #f00;
  }
  .m_preview .wrap {
    position: relative;
    min-height: 100%;
  }
</style>
