## Cell

> 仅具备展示功能，文本展示区域没有状态改变

-------------------------

### bmui-cell-arrow1

#### 参数

  |   | Type | Default |
  |:---:|:----:|:-----:|
  | title | String | "TITLE" |
  | content | String | "" |

#### 用法

``` html
  <bmui-cell-arrow1 title="标题" content="内容"/>
```

-------------------------

### bmui-cell-arrow2

#### 参数

  |   | Type | Default |
  |:---:|:----:|:-----:|
  | title | String | "TITLE" |

### 用法

``` html
  <bmui-cell-arrow2 title="标题"/>
```

-------------------------

### bmui-cell-text

#### 参数

  |   | Type | Default |
  |:---:|:----:|:-----:|
  | title | String | "TITLE" |
  | content | String | "" |

#### 用法

``` html
  <bmui-cell-text title="标题" content="内容"/>
```

-------------------------

### bmui-cell-paragraph

#### 参数

  |   | Type | Default |
  |:---:|:----:|:-----:|
  | title | String | "TITLE" |
  | content | String | "" |

#### 用法

``` html
  <bmui-cell-paragraph title="标题" content="内容"/>
```

-------------------------

## Choice

> 基于表单单元格的扩展形态，有单选，多选形态

-------------------------

### bmui-radio

#### 参数

  |   | Type | Default | Remark |
  |:---:|:---:|:---:|:---------:|
  | title | String | "TITLE" | |
  | items | Array(String \| Object) | [] | 如果items项为Object，其格式应符合{ name, value, disabled? }结构 |

#### 行为

  |   | args | Remark |
  |:---:|:---:|:-----:|
  | v-model | 被选中的item项 | 如果items项为Object，返回其value |

#### 用法


