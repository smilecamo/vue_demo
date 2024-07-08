# 如何理解语义化

- 让人更容易读懂-增加代码的可读性
- 让搜索语言更容易读懂，有利于 SEO

# 块级元素、行内元素

- 块级元素 独占一行 可以通过 display:block/table 进行设置 div/p/h1/table/ul/li
- 行内元素 不会独占一行 顺序排列 display:inline/inline-block 进行设置 span image input button

# 盒子模型

offsetWidth=内容宽度+padding+border
通过 box-sizing:border-box/content-box：默认值

# margin

## 纵向重叠

最终会使用最大的值，如果中间有空白标签，也会覆盖重叠

```css
margin-bottom: 20px;
margin-top: 10px;
```

## 负值

margin-top/margin-left 为负，元素自身上移动、左移动
margin-bottom:下面的元素向上移动，自身不会动
margin-right:右侧的元素向左移动，自身不会动

# 块级格式化上下文 BFC

一块独立渲染的空间，内部元素渲染不会影响边界外的元素
float:不为 none
position:absolute/fixed
overflow:不为 visible
display:flex/inline-block

# 定位 position

- static：静态定位 默认的按照文档流
- reactive:相对定位，根据自身定位
- absolve:绝对定位，根据最近一层不为 static 的定位，根据最近一层的定位元素定位
- fixed:固定定位、根据浏览器窗口定位
- sticky：粘性定位，到达某个位置之前是 reactive 相对定位，之后是 fixed 固定定位

# 居中

## 水平居中

- inline 元素：text-align:center
- block 元素：margin:auto
- absolve: left:50%+margin-left 负值、left:50 是针对于左上角的原点，只需要把自身再拉回来就行

## 垂直居中

- inline 元素 line-height 的值等于 height
- absolve: top:50%+margin-top 负值，需要知道自身的高度

## 水平垂直居中

- absolve:top:50%+transform:translateY(-50%) 兼容性不好，老版本不兼容
- absolve:top/left/bottom/right 都为 0，margin:auto 兼容性最好

# line-height 如何继承

- 具体数值 30px,就继承 30px
- 比列 2、1.5 就继承该比列
- 百分比 如 font-size:20px;line-height:200%,就继承算出来的值 40px

# rem vw vh vmin vmax

- rem 相对单位 跟对于根元素 font-size
- px 绝对单位
- em 针对父元素的 font-size
- vw 网页视口宽度的 1/100
- window.screen.height:屏幕高度
- window.innerHeight: 网页视口高度 不包含导航条和底部操作栏
- window.body.clientHeight body 的高度 动态的
- vmin vh/vw中最小的