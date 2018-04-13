请在1024宽度的窗口下获得更好的预览效果

Please view this page with at least 1024px width screen.

## Cell

> 仅具备展示功能，文本展示区域没有状态改变

-------------------------

### bmui-cell-arrow1

#### 布局方式：块

#### 参数

  | | Type | Default |
  |:---:|:---:|:----:|
  | title | String | "TITLE" |
  | content | String | "" |

#### 用法

``` html
  <bmui-cell-arrow1
    title="标题"
    content="内容"/>
```

-------------------------

### bmui-cell-arrow2

#### 布局方式：块

#### 参数

  | | Type | Default |
  |:---:|:---:|:----:|
  | title | String | "TITLE" |

#### 用法

``` html
  <bmui-cell-arrow2
    title="标题"/>
```

-------------------------

### bmui-cell-text

#### 布局方式：块

#### 参数

  | | Type | Default |
  |:---:|:---:|:----:|
  | title | String | "TITLE" |
  | content | String | "" |

#### 用法

``` html
  <bmui-cell-text
    title="标题"
    content="内容"/>
```

-------------------------

### bmui-cell-paragraph

#### 布局方式：块

#### 参数

  | | Type | Default |
  |:---:|:---:|:----:|
  | title | String | "TITLE" |
  | content | String | "" |

#### 用法

``` html
  <bmui-cell-paragraph
    title="标题"
    content="内容"/>
```

-------------------------

## Choice

> 基于表单单元格的扩展形态，有单选，多选形态

-------------------------

### bmui-radio

#### 布局方式：块

#### 参数

  | | Type | Default | Remark |
  |:---:|:---:|:---:|:-------:|
  | title | String | "TITLE" | 暂无 |
  | items | Array(String or Object) | ['ITEM'] | 如果items项为Object，其格式应符合{ name, value, disabled? }结构 |
  | v-model | Any | null | 如果items项为Object，返回其value |

#### 用法

``` html
  <bmui-radio
    title="标题"
    :items="['选项1', { name: '选项2', value: '2', disabled: true }"
    v-model="绑定对象"/>
```

-------------------------

### bmui-radio-list

#### 布局方式：块

#### 参数

  | | Type | Default | Remark |
  |:---:|:---:|:---:|:-------:|
  | items | Array(String or Object) | ['ITEM'] | 如果items项为Object，其格式应符合{ name, value, disabled? }结构 |
  | v-model | Any | null | 如果items项为Object，返回其value |

#### 用法

``` html
  <bmui-radio-list
    :items="['选项1', { name: '选项2', value: '2', disabled: true }"
    v-model="绑定对象"/>
```

-------------------------

### bmui-check-list-left与bmui-check-list-right

#### 布局方式：块

#### 参数

  | | Type | Default | Remark |
  |:---:|:---:|:---:|:-------:|
  | items | Array(String or Object) | ['ITEM'] | 如果items项为Object，其格式应符合{ name, value, disabled? }结构 |
  | v-model | [Any] | [] | 如果items项为Object，返回其value |

#### 用法

``` html
  <bmui-check-list-left
    :items="['选项1', { name: '选项2', value: '2', disabled: true }"
    v-model="绑定对象"/>
```

-------------------------

### bmui-selector

#### 布局方式：行内块

#### 参数

  | | Type | Default | Remark |
  |:---:|:---:|:---:|:-------:|
  | item | String or Object | 'ITEM' | 如果item为Object，其格式应符合{ name, value }结构 |
  | disabled | Any | undefined | 暂无 |
  | v-model | Any | null | 绑定的目标值更新后为Bool |

#### 行为

  | Event | Args | Remark |
  |:-----:|:-----:|:-----:|
  | change | Object（点击的响应） | 返回结构为{ item, checked }，与v-model一起时慎用，因为有逻辑交集 |

#### 用法

``` html
  <bmui-selector
    :item="{ name: '选项名称', value: '选项值' }"
    :checked="selector === '选项值'"
    :disabled="true"
    @change="selectorChange"/>
```

-------------------------

## field

> 有交互的表单控件，该目录下的控件共享大部分input固有的属性，像maxlength，disable等，但一般不具备@change功能，只能通过v-model监听变化

-------------------------

### bmui-field-arrow1

#### 布局方式：块

#### 参数

  | | Type | Default | Remark |
  |:---:|:---:|:---: |:---:   |
  | title | String | 'TITLE' | / |
  | content | String | '' | / |
  | placeholder | String | '请选择' | / |

#### 用法

```html
  <bmui-field-arrow1
    title="field-arrow1"
    content="已选择"/>
```

-------------------------

### bmui-field-arrow2

#### 布局方式：块

#### 参数

  | | Type | Default | Remark |
  |:---:|:---:|:---: |:---:   |
  | title | String | 'TITLE' | / |
  | content | String | '' | / |
  | placeholder | String | '请选择' | / |

#### 用法

```html
  <bmui-field-arrow2 title="field-arrow2"/>
```

-------------------------

### bmui-field-text1

#### 布局方式：块

#### 参数

  | | Type | Default | Remark |
  |:---:|:---:|:---: |:---:   |
  | title | String | 'TITLE' | / |
  | v-model | Any | null | / |
  | placeholder | String | '请输入' | / |

#### 用法

```html
  <bmui-field-text1
    title="field-text1"
    placeholder="自定义占位符"
    v-model="绑定对象"/>
```

-------------------------

### bmui-field-text2

#### 布局方式：块

#### 参数

  | | Type | Default | Remark |
  |:---:|:---:|:---: |:---:   |
  | title | String | 'TITLE' | / |
  | v-model | Any | null | / |
  | placeholder | String | '请输入' | / |

#### 用法

```html
  <bmui-field-text2
    title="field-text2"
    v-model="绑定对象"/>
```

-------------------------

### bmui-field-paragraph

#### 布局方式：块

#### 参数

  | | Type | Default | Remark |
  |:---:|:---:|:---: |:---:   |
  | title | String | 'TITLE' | / |
  | maxlength | Number | null | / |
  | v-model | Any | null | / |

#### 用法

```html
  <bmui-field-paragraph
    title="field-paragraph"
    maxlength="100"
    v-model="绑定对象"/>
```

-------------------------

### bmui-field-btn

#### 布局方式：块

#### 参数

  | | Type | Default | Remark |
  |:---:|:---:|:---: |:---:   |
  | title | String | 'TITLE' | / |
  | btn | String | 'BUTTON' | / |
  | v-model | Any | null | / |
  | status | String | '' | 目前有4种状态：loading，success，warning，fail |

#### 行为

  | Event | Args | Remark |
  |:---:  |:---: |:---:   |
  | submit | String | / |


#### 用法

```html
  <bmui-field-btn
    title="field-btn"
    v-model="绑定对象"
    @submit="回调事件"
    :status="loading"/>
```
