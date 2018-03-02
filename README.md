# BMUI
Bluemoon Moon UI (currently based on Vue)

# Development
```
  npm run dev
```

# Production
```
  npm run build
```

# Usage
```
  npm install bmui
```
``` javascript
  import 'bmui' // CSS
  import Bmui from 'bmui/dist/vue' // Vue components
  import Vue from 'vue'
  Vue.use(Bmui)
```

# Example
## Cell
``` html
  <bmui-cell-arrow1 title="左边标题" content="右边一行内容" />
  <bmui-cell-arrow2 title="左边标题" />
  <bmui-cell-text title="左边标题" content="右边多行内容" />
  <bmui-cell-paragraph title="上边标题" content="下边内容" />
```
## choice
``` html
  <bmui-radio title="左边标题" :items="选项数组：[String|Object: { name:String, value:Any, disabled:Boolean }]" v-model="数据绑定实体" />
  <bmui-radio-list :items="选项数组：[String|Object: { name:String, value:Any, disabled:Boolean }]" v-model="数据绑定实体" />
  <bmui-check-list-left :items="选项数组：[String|Object: { name:String, value:Any, disabled:Boolean }]" v-model="数据绑定数组" />
  <bmui-check-list-right :items="选项数组：[String|Object: { name:String, value:Any, disabled:Boolean }]" v-model="数据绑定数组" />
  <bmui-selector :item="选项：String|Object: { name: String, value: Any }" :disabled="是否禁用：Boolean" @change="选择事件：args:value" />  
```

## field
``` html
  <bmui-field-arrow1 title="左边标题" />
  <bmui-field-arrow2 title="左边标题" content="右边内容" />
  <bmui-field-text1 title="左边标题" v-model="文本绑定实体" />
  <bmui-field-text1 title="上边标题" v-model="文本绑定实体" />
  <bmui-field-paragraph title="上边标题" maxlength="最大长度" v-model="文本绑定实体" />
  <bmui-field-btn title="左边标题" btn="按钮文本" @submit="按确认回调事件：args:value" status="右边状态：'loading'|'success'|'warning'|'fail" v-model="文本绑定实体" />
```

## searchbox
``` html
  <bmui-searchbox v-model="文本绑定实体" @submit="按确认回调事件：args:value" />
  <bmui-searchbox-empty />
```

## segment
``` html
  <bmui-segment :items="选项数组：[String|Object: { name: String, mark: Number }]" index="激活项" @change="点击事件：args:index" />
```