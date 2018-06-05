<template>
  <div class="m_page">
    <div class="m_category">
      <h2>组件目录</h2>
      <ul>
        <li><button @click="$router.replace('cell')">Cell</button></li>
        <li><button @click="$router.replace('choice')">Choice</button></li>
        <li><button @click="$router.replace('field')">Field</button></li>
        <li><button @click="$router.replace('searchbox')">Searchbox</button></li>
        <li><button @click="$router.replace('segment')">Segment</button></li>
        <li><button @click="$router.replace('empty')">Empty</button></li>
        <li><button @click="$router.replace('picker')">Picker</button></li>
      </ul>
    </div>
    <readme class="m_readme"/>
    <div class="m_preview">
      <p v-if="!anchor">请选择最左列目录的组件</p>
      <div
        class="wrap"
        v-show="anchor === 'cell'">
        <bmui-cell-arrow1
          title="cell-arrow1"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut magni perferendis rem hic quam, sunt cum, culpa inventore obcaecati at harum nam eaque fugit fuga perspiciatis. Illum, nihil voluptatibus."/>
        <bmui-cell-arrow2 title="cell-arrow2"/>
        <bmui-cell-text
          title="cell-text"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur aut debitis nihil distinctio dolorum repudiandae laborum aliquid sapiente, totam culpa sint reiciendis modi dolor quasi dolorem iusto atque error qui."/>
        <bmui-cell-paragraph
          title="cell-paragraph"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit commodi corporis repellendus ipsum aliquid asperiores rerum quos. Aliquam, non nam alias eveniet, voluptate, maxime facere dolor provident rem recusandae excepturi."/>
      </div>
      <div
        class="wrap"
        v-show="anchor === 'choice'">
        <bmui-radio
          title="radio"
          :items="['111', { name: '选项2', value: '222' }, { name: '禁用选项', value: '333', disabled: true }, '444', '555']"
          v-model="radioModel"/>
        <bmui-radio-list
          :items="['radio-list', { name: '选项', value: '222' }, '选项很长很长很长很长很长很长很长很长很长很长很长很长很长']"
          v-model="radioListModel"/>
        <bmui-check-list-left
          :items="['check-list-left', '222', { name: '选项名称', value: '333', disabled: true }]"
          v-model="checkListLeftModel"/>
        <bmui-check-list-right
          :items="['check-list-right', '222', { name: '选项名称超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长', value: '333', disabled: true }]"
          v-model="checkListRightModel"/>
        <bmui-selector
          item="test"
          :checked="selectorChecked"
          @click="selectorClick"/>
        <bmui-selector
          :item="{ name: '选项2的名称', value: '222' }"
          :disabled="true"/>
      </div>
      <div
        class="wrap"
        v-show="anchor === 'field'">
        <bmui-field-arrow1
          title="field-arrow1"
          content="已选择"/>
        <bmui-field-arrow2 title="field-arrow2"/>
        <bmui-field-text1
          title="field-text1"
          placeholder="自定义占位符"
          v-model="fieldText1Model"/>
        <bmui-field-text1
          title="field-text1-readonly"
          readonly
          placeholder="自定义占位符"
          v-model="fieldText1Model"/>
        <bmui-field-text1
          title="field-text1-selectable"
          placeholder="自定义占位符"
          selectable
          v-model="fieldText1Model"/>
        <bmui-field-text1
          title="field-text1-with-slot"
          v-model="fieldText1Model">
          <div>i'm a slot</div>
        </bmui-field-text1>
        <bmui-field-text2
          title="field-text2"
          v-model="fieldText2Model"/>
        <bmui-field-text2
          title="field-text2-selectable"
          selectable
          v-model="fieldText2Model"/>
        <bmui-field-paragraph
          title="field-paragraph"
          v-model="fieldParagraph"/>
        <bmui-field-btn
          title="field-btn"
          btn="按钮文字"
          v-model="fieldBtn"
          @submit="fieldBtnSubmit"
          :status="fieldBtnStatus"/>
      </div>
      <div
        class="wrap"
        v-show="anchor === 'searchbox'">
        <bmui-searchbox
          v-model="searchbox"
          @submit="searchboxEmpty = true"/>
        <bmui-searchbox-empty v-if="searchboxEmpty"/>
      </div>
      <div
        class="wrap"
        v-show="anchor === 'segment'">
        <bmui-segment
          :items="[{ name: '选项1', value: '1', mark: 100 }, '选项2', '3', '4']"
          :index="1"/>
      </div>
      <div
        class="wrap"
        v-show="anchor === 'empty'">
        <bmui-empty
          title="空页面"
          btn="按钮要监听组件click.native事件"/>
      </div>
      <div
        class="wrap"
        v-show="anchor === 'picker'"
        ref="picker">
        <button @click="pickerOpen">点击打开picker</button>
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
      selectorChecked: false,
      fieldText1Model: '',
      fieldText2Model: '',
      fieldParagraph: '',
      fieldBtn: '',
      fieldBtnStatus: '',
      searchbox: 'searchbox',
      searchboxEmpty: false
    }
  },
  computed: {
    anchor () {
      return this.$route.path ? this.$route.path.slice(1) : ''
    }
  },
  created () {
  },
  methods: {
    selectorClick (res) {
      this.selectorChecked = res.checked
    },
    fieldBtnSubmit () {
      this.fieldBtnStatus = 'loading'
      setTimeout(() => {
        this.fieldBtnStatus = 'success'
      }, 1000)
      setTimeout(() => {
        this.fieldBtnStatus = 'warning'
      }, 2000)
      setTimeout(() => {
        this.fieldBtnStatus = 'fail'
      }, 3000)
      setTimeout(() => {
        this.fieldBtnStatus = ''
      }, 4000)
    },
    segmentChange (index) {
      console.log(index)
    },
    pickerOpen () {
      this.$bmuiPicker.open(
        [
          [
            'a',
            { name: 1234, value: 4321, sub: ['b', 'bb', 'bbb'] },
            'c'
          ]
        ],
        undefined,
        {
          container: this.$refs.picker,
          type: 'TIME'
        }
      )
    }
  }
}
</script>
<style scoped>
  @media screen and (max-width: 1024px) {
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
