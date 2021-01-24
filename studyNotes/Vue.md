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
    ![image-20210124153651174](学习截图/image-20210124153651174.png)
    
  - 全局安装webpack（这里安装3.6.0是因为vue2 cli依赖该版本）
    ![image-20210124153726301](学习截图/image-20210124153726301.png)
    
  - 局部安装webpack
    - --save--dev 是开发时依赖，项目打包以后不需要继续使用的
    ![image-20210124153837138](学习截图/image-20210124153837138.png)
    
    

#### 3.2 准备工作

  - dist文件夹：用于存放之后打包的文件
  - src文件夹：用于存放我们写的源文件
    - index.js：项目的入口文件
    - mathUtils.js：定义了一些数学工具函数，可以在其他地方引用，并且使用
  - index.html：浏览器打开的展示的首页
  - package.json：通过 npm init 在终端生成，npm包管理的文件

    
#### 3.3 入口和出口
  - 每次使用webpack的命令都需要写入入口和出口作为参数，就非常麻烦，创建一个webpack.config.js文件来解决
  - ![image-20210124000320708](学习截图/image-20210124000320708.png)



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
    ![image-20210124001005393](学习截图/image-20210124001005393.png)

  - package.json中的scripts的脚本在执行时，会按照一定的顺序寻找命令对应的位置
    - 首先，会寻找本地的node_modules/.bin路径中对应的命令
    - 如果没有找到，就会去全局的环境变量中寻找
    - 如何执行build指令
      ![image-20210124001033428](学习截图/image-20210124001033428.png)



#### 3.6 loader

- loader是webpack中的非常核心的概念
- loader的作用
  - 主要使用webpack来处理js代码，以及js代码之间的一些依赖，而处理其他文件以及他们的依赖时webpack就无法做到
  - 给webpack扩展对应的loader，可以将需要加载的css、图片，也包括一些高级的将ES6转成ES5代码，将Typescript转换城ES5代码，将scss、less转成css，将.jsk、.vue文件转成js文件等等
- loader使用过程：
  - 步骤一、通过npm安装需要使用的loader
  - 步骤二、在webpack.config.js中的modules关键字下进行配置
- 大部分loader都可以在webpack的官网中找到，并且学习对应的用法
- 注意：**webpack在读取使用的loader时，是按照从右往左的顺序读取**，所以配置loader的顺序应该从右往左![image-20210124150813500](学习截图/image-20210124150813500.png)



#### 3.7 less文件处理 less-loader

- 准备工作
  - 若希望项目中使用less、scss、stylus来写样式，webpack打包配置大同小异
  - 以less为例
- 1.创建一个less文件，依然放在css文件夹中
  ![image-20210124154844822](学习截图/image-20210124154844822.png)
- 在index.js添加依赖（添加依赖以后，打包时webpack会去寻找并进行打包）
  ![image-20210124160431855](学习截图/image-20210124160431855.png)
- 官网查找并下载less的loader
  ![image-20210124160133232](学习截图/image-20210124160133232.png)
- webpack.config.js里配置部署
  ![image-20210124160305233](学习截图/image-20210124160305233.png)
- 在终端npm run build进行打包即可



#### 3.8 webpack-图片文件的处理

- 在样式中插入图片后直接打包会报错
  ![image-20210124161732891](学习截图/image-20210124161732891.png)
- 官网寻找对应loader-文件loader-URLloader，并安装该loader
  ![image-20210124162657895](学习截图/image-20210124162657895.png)
- webpack.config.js里配置部署
  ![image-20210124164149228](学习截图/image-20210124164149228.png)
- 注意limit是限制图片大小（一般为**8192**），当图片小于limit时，会将图片编译成base64字符串形式展示，若图片大于limit，则会报错
  ![image-20210124164259705](学习截图/image-20210124164259705.png)
- 当图片大小超出limit，他会去查找file-loader进行加载，则要么更改limit，要么**安装file-loader**
- 然后会将该图片进行打包到dist文件夹中（自动生成）
  ![image-20210124164844985](学习截图/image-20210124164844985.png)
- 如上图，webpack自动生成了一个非常长的名字
  - 这是一个32位的hash值，目的是防止名字重复
  - 真实开发中可能对打包的图片名字有一定的要求
  - 所以可以在options中添加如下选项：
    - img：文件要打包到的文件夹
    - name：获取图片原来的名字，放在该位置
    - hash:8：为了防止图片名称冲突，依然使用hash，但只保留8位
    - ext：使用图片原来的扩展名
      ![image-20210124171049364](学习截图/image-20210124171049364.png)
      生成的图片
      ![image-20210124171150179](学习截图/image-20210124171150179.png)
- 生成路径不同，所以不会显示，需要在webpack.config.js里更改配置，更改后会自动在url路径前添加文件夹路径
  ![image-20210124165202691](学习截图/image-20210124165202691.png)
  ![image-20210124165347817](学习截图/image-20210124165347817.png)
- 注意：**一般实际开发中index.html文件也会被放入dist中，所以可能不需要更改路径配置，需要时记得删除**



#### 3.9 ES6语法转ES5语法处理

- 如果你仔细阅读webpack打包的js文件夹，发现写的ES6语法并没有转成ES5的语法，那么就意味着一些可能对ES6还不支持的浏览器没有办法很好的运行代码
- 如果希望将ES6语法转成ES5语法，就需要使用babel。
  - 直接使用babel对应的loader就可以了
- 安装和配置方法查询webpack官网



#### 3.10 ★webpack的Vue配置（Vue的npm安装）

- 后续项目中，会使用Vuejs进行开发，会以特殊的文件（.vue的形式）来组织Vue的组件
- 所以需要在webpack环境中集成Vuejs
- 首先安装依赖（注意：实际项目中也会使用Vue，所以**不是开发时依赖**）
  ![image-20210124173631056](学习截图/image-20210124173631056.png)

- 然后在index.js中进行引用依赖即可（**注意“vue”的大小写要与后面配置一致**），之后就可以在js内用Vuejs写代码
  ![image-20210124175116035](学习截图/image-20210124175116035.png)



- **打包项目-错误信息**
  - 修改完成后重新打包，运行程序，打包过程没有错误，但运行程序没有得到想要的结果，浏览器报错
    ![image-20210124175228752](学习截图/image-20210124175228752.png)
  - 这个错误说的是使用的是runtime-only版本的Vue
    - Vue不同版本的构建，有runtime-only和runtime-compiler的区别（后续会讲）
      - runtime-only -> 代码中不可以有任何的template
      - runtime-compiler -> 可以有template，因为有compiler可以用于编译template
  - 所以许要修改webpack.config.js的配置(**注意“vue$”大小写要与index.html引入vue时的“vue”大小写一致**)
    ![image-20210124180007576](学习截图/image-20210124180007576.png)



#### 3.11 webpack中Vue的书写

- el和template的区别

  - 正常运行后，如果希望将Vue实例的data中的数据显示在界面中，就必须是修改index.html
- 如果后面定义了组件，也必须修改index.html来使用
  - 但是html模板在之后的开发中，并不希望手动的来频繁修改（如何解决？）
  - 所以可以定义一个template属性：
  ![image-20210124181702198](学习截图/image-20210124181702198.png)
  - 定义template后，会将template内容自动替换掉el挂载的.html文件中的标签内（上图中的会**替换掉整个id为“#app“的div**）



#### 3.12 ★webpack组件和模板的抽离（模块化）

- 接上(3.11)，将内容全部写入实例中(特别是template内容的书写)，当代码量变大时会变得非常的繁琐，所以会选择将代码抽离
  - 在src下新建一个名为"vue"的文件夹，在内部可以建立一个app.js文件，将实例中的data、template、methods、computed等可使用的属性及内容抽离到app.js文件中，并匿名导出
    <img src="学习截图/image-20210124194352160.png" alt="image-20210124194352160" style="zoom: 67%;" />
  - 之后在index.js中导入该文件
    ![image-20210124194606424](学习截图/image-20210124194606424.png)
  - 然后在Vue实例中通过components引入该组件，并在template属性中使用即可
    ![image-20210124194655214](学习截图/image-20210124194655214.png)



- 但是即便如此，在app.js文件中写入代码也还是非常的不方便，template属性中的代码还是无法得到快捷输入方式和格式化，所以我们可以使用新的一种文件格式：.vue文件格式

  - 可在vue文件夹下新建一个App.vue文件（开头推荐大写）

  - 在该文件内写入template标签，并将app.js中的template内容抽离到该标签内（h2中的class属性可写样式，如下文）
    ![image-20210124195101333](学习截图/image-20210124195101333.png)

  - 写入一个script标签，将app.js文件中的其他属性和内容写入为一个新的组件并且匿名导出
    ![image-20210124195528695](学习截图/image-20210124195528695.png)

  - 若有需求要对该组件进行样式修改，可以写入一个style标签，并对template标签内的元素编写样式
    ![image-20210124200117253](学习截图/image-20210124200117253.png)

  - 此时原来的app.js文件就失去作用，index.js中引入的文件更改为
    ![image-20210124195634398](学习截图/image-20210124195634398.png)

    

#### 3.12-拓展 组件的使用

- 3.12中实现了对实例的组件化抽离，那如果在该实例中想要创建新的组件模板和注册组件该怎么办？
  - 在vue文件夹中新建一个Cpn.vue的文件，在该文件中写入创建的新组件—Cpn，并**匿名导出**
    <img src="学习截图/image-20210124200514087.png" alt="image-20210124200514087" style="zoom:50%;" />
  - 在Vue实例文件app.vue中的script标签中**命名导入**该文件
    ![image-20210124201002897](学习截图/image-20210124201002897.png)
  - 在实例组件内通过components属性引入即可
    ![image-20210124201034880](学习截图/image-20210124201034880.png)

​    

#### 3.13 .vue文件封装处理

- 一个组件以一个js对象的形式进行组织和使用是非常不方便的
  - 编写template模块非常的麻烦
  - 如果有样式的话，书写比较麻烦
- 可以使用**.vue文件**的方式来组织vue的组件
- 但是文件在先基础上无法被正常加载
  - 特殊的文件以及特殊的格式，需要loader来帮助处理
  - 安装vue-loader和vue-template-compiler
    ![image-20210124191327370](学习截图/image-20210124191327370.png)
- 然后修改webpack.config.js的配置文件
  ![image-20210124191714224](学习截图/image-20210124191714224.png)

- 此时运行可能会遇到一个问题，终端可能报错（vue-loader有许多版本，从14.x版本开始使用就需要配置另一个插件plugin，下文讲解）
  ![image-20210124192110640](学习截图/image-20210124192110640.png)
  - 解决方案可在package.json文件中将vue-loader版本进行手动更改（图中表示会在13.x到14版本之间安装一个版本）
    ![image-20210124192424862](学习截图/image-20210124192424862.png)
  - 然后进行配置安装：![image-20210124192553049](学习截图/image-20210124192553049.png)即可



#### 3.13-拓展 .vue文件在import导入时后缀名省略问题

- 在前面所讲的各种loader的使用中，可以发现在import引入文件时，路径文件的后缀名可以省略也不会出现问题（如.js、.less、.css等），但是.vue文件则无法省略，否则会出现找不到文件的报错
- 解决方式：修改package.config.js文件中的配置
  - 在resolve对象中新增一个属性，并赋值，值为想要省略的后缀名（以 **.后缀名** 的形式）：
    ![image-20210124201601937](学习截图/image-20210124201601937.png)



#### 3.14 plugin的基本使用

- 认识plugin
  - plugin是插件的意思
    - webpack中的插件，就是对webpack现有功能的各种国战，比如打包优化、文件压缩等等
  - loader和plugin的区别
    - loader主要用于转换某些类型的模块，他本身是一个**转换器**
    - plugin时插件，它是对webpack本身的扩展，是一个**扩展器**
  - plugin的使用过程
    - 步骤一、通过npm安装需要使用的plugins（某些webpack已经内置的插件不需要安装）
    - 步骤二、在webpack.config.js中配置插件
- 好用的plugin
  - 添加版权的plugin
    - BannerPlugin，属于webpack自带的内置插件
    - 可通过修改webpack.config.js的文件来进行配置
      - 添加文件导入
        ![image-20210124205038211](学习截图/image-20210124205038211.png)
      - 在module.exports里新增属性和内容
        ![image-20210124205111262](学习截图/image-20210124205111262.png)
      - 版权结果可到dist文件夹下的bundle.js里查看
        ![image-20210124205147739](学习截图/image-20210124205147739.png)







### 四、Vue CLI



