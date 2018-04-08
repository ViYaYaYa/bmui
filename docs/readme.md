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

### 用法

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
  | checked | Any | undefined | 暂无 |

#### 行为

  | Event | Args | Remark |
  |:-----:|:-----:|:-----:|
  | change | Object（点击的响应） | 返回结构为{ item, checked } |

#### 用法

``` html
  <bmui-selector
    :item="{ name: '选项名称', value: '选项值' }"
    :checked="selector === '选项值'"
    :disabled="true"
    @change="selectorChange" />
```

-------------------------
