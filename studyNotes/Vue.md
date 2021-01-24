# Vue Day 01

### 一. 邂逅Vuejs

#### 1.1 认识Vuejs

- 为什么学习Vuejs
- Vue的读音
  Vue (读音 /vjuː/，类似于 **view**)

- Vue的渐进式
- Vue的特点



#### 1.2 安装Vue

- CDN引入
- 下载引入
- npm安装



#### 1.3 Vue的初体验

- Hello Vuejs
  - mustache -> 体验vue响应式

- Vue列表展示
  - v-for
  - 后面给数组追加元素的时候，新的元素也可以在界面中渲染出来
- Vue计数器小案例
  - 事件监听：click ->methods

#### 1.4 Vue中的MVVM



#### 1.5 创建Vue时，options可以放哪些东西

- el:
- data:
- methods:
- 生命周期函数



### 二、插值语法

- mustache语法
- v-once
- v-html
- v-text
- v-pre: 直接跳过Vue的解析过程，将原本包含{{}}的内容展示出来
- v-cloak:斗篷



### 三、动态绑定属性 v-bind

#### 3.1 v-bind绑定基本属性

- v-bind: src
- v-bind: href

#### 3.2 v-bind动态绑定class

- 对象语法：class='{类名:boolean}'
- 数组语法：

#### 3.3 v-bind动态绑定style

- 对象语法：
- 数组语法：



### 四、计算属性

- 案例一：firstName + lastName
- 案例二：books ->price

#### 4.1 计算属性的本质

- fullname: {set(), get()}

#### 4.2 计算属性和methods的对比

- 计算属性在多次使用时，只会调用一次
- 计算属性有缓存



# Vue Day 02

### 一、事件监听

#### 1.1 事件监听的基本使用

- v-on
- 语法糖：@

#### 1.2 参数问题

- btnClick
  不需要传递参数时括号可以省略
- btnClick(event)
  若省略了括号，但是调用了参数，默认传递的是触发事件的event对象
- btnClick(abc,event) -> $event
  若传递了参数（abc），同时也需要event时，通过$event传递



#### 1.3 修饰符

- .stop()
  阻止冒泡
- .prevent()
- .enter
  限定触发按键为enter，类似按键很多
- .once
  只触发一次
- .native



### 二、条件判断

#### 2.1 v-if/v-else-if/v-else



#### 2.2 登录小案例

- 小问题：遇到判断切换时，input框内已输入的内容没有切换
  原因是Vue内部的Diff算法问题，解决方案为添加一个不同的key属性值



#### 2.3 v-show

- v-show和v-if的区别
  - v-show是改变了元素的display样式使其隐藏或者显示
  - v-if是选择是否渲染该元素，若为false，则不渲染，DOM树里就不存在该元素



### 三、循环遍历

- v-for

#### 3.1 遍历数组

- 有索引值和没有索引值的情况



#### 3.2 遍历对象

- value
- value,key
- value,key,index



#### 3.3 数组的哪些方法是响应式的



#### 3.4 作业完成



### 四、书籍案例

- 实现书籍响应式的添加、删除，购买数量的添加和减少，以及价格的汇总
- 当书籍全部清空时，隐藏界面，显示提示信息：购物车为空



### 五、v-model的使用

#### 5.1 基本使用

- v-model 原理=> v-bind:value v-on:input

#### 5.2 v-model和radio/checkbox/select的配合使用



#### 5.3 修饰符

- lazy
  等用户输入框接收enter或者失去焦点时修改
- number
  讲输入内容转换为数值处理
- trim
  清楚输入内容左右的空格



### 六、组件化开发

#### 6.1 认识组件化

- 组件化的概念
  将较为复杂的逻辑处理页面分隔成较为简单可处理的几个小的组件进行逻辑处理
- 组件化的步骤



#### 6.2 组件的基本使用过程



#### 6.3 全局组件和局部组件



#### 6.4 父组件和子组件的概念



#### 6.5 组件注册的语法糖



#### 6.6 组件模板的分离写法

- script写法
- template写法



#### 6.7 数据的存放

- 子组件不能直接访问父组件
- 子组件中有自己的data
  data必须是一个函数，有返回值（可返回一个对象）
- 子组件的data为什么必须是一个函数



#### 6.8 父子组件的通信

- 父传子
  - props()
- 子传父
  - $emit()



# Vue Day 03

### 一、组件化开发补充





### 二、前端模块化开发







### 三、webpack

#### 3.0 webpack和grunt/gulp的对比

- grunt/gulp的核心是Task
  - 可以配置一系列的task，并且定义task要处理的事务（例如ES6、ts转化，图片压缩，scss转成css）
  - 之后让grunt/gulp来依次执行这些task，而且让整个流程自动化
  - grunt/gulp也被称为前端自动化任务管理工具
- 与webpack的不同
  - grunt/gulp更加强调的是**前端流程的自动化**，模块化不是他的核心
  - webpack更加强调**模块化**开发管理，而文件压缩合并、预处理等功能，送他附带的功能



#### 3.1 webpack安装

  - 首先安装Node.js，Node.js自带了软件包管理工具npm
  - 查看自己的node版本
    node -v
  - 全局安装webpack（这里安装3.6.0是因为vue2 cli依赖该版本）
    npm install webpack@3.6.0 -g
  - 局部安装webpack
    - --savu--dev 是开发时依赖，项目打包以后不需要继续使用的
    - npm install webpack@3.6.0 --save-dev

#### 3.2 准备工作
  - dist文件夹：用于存放之后打包的文件
  - src文件夹：用于存放我们写的源文件
    - index.js：项目的入口文件
    - mathUtils.js：定义了一些数学工具函数，可以在其他地方引用，并且使用
  - index.html：浏览器打开的展示的首页
  - package.json：通过 npm init 在终端生成，npm包管理的文件

    
#### 3.3 入口和出口
  - 每次使用webpack的命令都需要写入入口和出口作为参数，就非常麻烦，创建一个webpack.config.js文件来解决
  - ![image-20210124000320708](D:\tools\GitHub\myStudyRepository\studyNotes\学习截图\image-20210124000320708.png)

#### 3.4 局部安装webpack

  - 使用的webpack打包是全局的webpack，如果想用局部来打包
    - 因为一个项目往往以来特定的webpack版本，全局的版本可能跟这个项目的webpack版本不一致，导致打包出现问题。
    - 所以通常一个项目，都有自己的局部webpack
  - 第一步，在项目中需要安装自己的局部webpack
    - 这里我们让局部安装webpack3.6.0
    - Vue CLI3中已经升级到webpack4，但是他将配置文件隐藏了起来，查看起来不是很方便
  - 第二步，通过 node_modules/.bin/webpack 启动webpack打包

#### 3.5 package.json中定义启动

  - 每次都敲上面那一长串很不方便，所以在package.json中的scripts中定义自己的执行脚本
    ![image-20210124001005393](D:\tools\GitHub\myStudyRepository\studyNotes\学习截图\image-20210124001005393.png)

  - package.json中的scripts的脚本在执行时，会按照一定的顺序寻找命令对应的位置
    - 首先，会寻找本地的node_modules/.bin路径中对应的命令
    - 如果没有找到，就会去全局的环境变量中寻找
    - 如何执行build指令
      ![image-20210124001033428](D:\tools\GitHub\myStudyRepository\studyNotes\学习截图\image-20210124001033428.png)

#### 3.6 loader

- loader是webpack中的非常核心的概念
- loader的作用
  - 主要使用webpack来处理js代码，以及js代码之间的一些依赖，而处理其他文件以及他们的依赖时webpack就无法做到
  - 给webpack扩展对应的loader，可以将需要加载的css、图片，也包括一些高级的将ES6转成ES5代码，将Typescript转换城ES5代码，将scss、less转成css，将.jsk、.vue文件转成js文件等等
- loader使用过程：
  - 步骤一、通过npm安装需要使用的loader
  - 步骤二、在webpack.config.js中的modules关键字下进行配置
- 大部分loader都可以在webpack的官网中找到，并且学习对应的用法
- 注意：**webpack在读取使用的loader时，是按照从右往左的顺序读取**，所以配置loader的顺序应该从右往左![image-20210124150813500](D:\tools\GitHub\myStudyRepository\studyNotes\学习截图\image-20210124150813500.png)

#### 3.7 less文件处理

- 准备工作
  - 若希望项目中使用less、scss、stylus来写样式，webpack打包配置大同小异
  - 以less为例
- 1.创建一个less文件，依然放在css文件夹中!



### 四、Vue CLI



