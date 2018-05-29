请在1024宽度的窗口下获得更好的预览效果

Please view this page with at least 1024px width screen.

## Cell

> 仅具备展示功能，文本展示区域没有状态改变，大部分的Cell都具有slot的功能，即放置自定义元素充当content

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
  | items | Array(String or Object) | [] | 如果items项为Object，其格式应符合{ name, value, disabled? }结构，name为空时默认'ITEM' |
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
  | items | Array(String or Object) | [] | 如果items项为Object，其格式应符合{ name, value, disabled? }结构，name为空是默认'ITEM' |
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
  | items | Array(String or Object) | [] | 如果items项为Object，其格式应符合{ name, value, disabled? }结构，name为空是默认'ITEM' |
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
  | disabled | Any | undefined | / |
  | checked | Any | false | / |

#### 行为

  | Event | Args | Remark |
  |:-----:|:-----:|:-----:|
  | click | Object（点击的响应） | 返回结构为{ item, checked } |

#### 用法

``` html
  <bmui-selector
    :item="{ name: '选项名称', value: '选项值' }"
    :checked="selector === '选项值'"
    :disabled="true"
    @click="selectorChange"/>
```

-------------------------

## Field

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
  | maxlength | Number | 100 | / |
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

-------------------------

## Searchbox

> 跟搜索有关的一些组件

-------------------------

### searchbox

#### 布局方式：块

#### 参数

  | | Type | Default | Remark |
  |:---:|:---:|:---: |:---:   |
  | v-model | Any | null | / |
  | placeholder | String | '请输入关键字' | / |

#### 行为

  | Event | Args | Remark |
  |:---:  |:---: |:---:   |
  | submit | String | / |

#### 用法

```html
<bmui-searchbox
  v-model="searchbox"
  @submit="按确定的回调"/>
```

-------------------------

### searchbox-empty

#### 布局方式：块（距上一块约合44px）

#### 参数

  | | Type | Default | Remark |
  |:---:|:---:|:---: |:---:   |
  | title | String | '查找不到结果' | / |

#### 用法

```html
<bmui-searchbox-empty/>
```

-------------------------

## Segment

> 1、每个项目宽度等分屏幕，最多等分4格，超出项宽度=25%屏幕
> 2、项目格子达到最小内边距，字段过长需要显示“…”（建议每项中文字数2～6个）
> 3、选中项目时，如能滑动，则自动把选中项滑动到屏幕中间（**尚未实现**）

-------------------------

### segment

#### 布局方式：块（设计图默认高34px）

#### 参数

  | | Type | Default | Remark |
  |:---:|:---:|:---: |:---:   |
  | items | [String 或 Object] | [] | 如果item是Object，需满足{ name: String, value: Any, mark: Number }这种格式，name为空时默认'ITEM'，mark大于99时显示99+ |
  | index | Number | null | / |

#### 行为

  | Event | Args | Remark |
  |:---:  |:---: |:---:   |
  | change | Index | 被选中的项数，之所以不用value，是因为value可能重复 |

#### 用法

```html
<bmui-segment
  :items="[{ name: '选项1', value: '1', mark: 999 }, '选项2']"
  :index="1"/>
```

-------------------------

## Empty

> 公用的空页面

-------------------------

### empty

#### 布局方式：绝对定位（距离上方20%）

#### 参数

  | | Type | Default | Remark |
  |:---:|:---:|:---: |:---:   |
  | title | String | '暂无数据' | / |
  | btn | String | '' | 因为没有点击事件，所以要手动绑定@click.native进行监听 |

#### 用法

```html
  <bmui-empty
    title="空页面"
    btn="按钮要监听组件click.native事件"/>
```

-------------------------
