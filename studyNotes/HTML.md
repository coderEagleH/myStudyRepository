# 0、web前端自学导论

#### 0.1 计算机语言

- **机器语言**
  由“0”和“1”构成的二进制编码
- **汇编语言**
  控制计算机的指令，有固定的格式和词汇，英文缩写
- **高级语言**
  C,C++,Java,Python,PHP,JavaScript 等之类的语言



#### 0.2 前端学习流程

- HTML -> CSS -> HTML5,CSS3 -> 项目开发



#### 0.3 网页的基本组成

- 通常以**图片**，**文字**，**音频**等元素构成
- 常保存为以**.html**或者**.htm**的文件
- HTML：超文本标记语言
  用于创建网页，可加入多种元素，也可加入超链接



#### 0.4 常用的浏览器

- IE
- 火狐（Firefox）
- 谷歌（Chrome）
- Safari
- Opera



#### 0.5 web标准的三大组成部分

- 结构（Structure）
  用于对**网页元素**进行整理和分类，现主要学习**HTML**
- 表现（Presentation）
  用于设置网页元素的版式、大小、颜色等**外观样式**，现阶段学习**CSS**
- 行为（Behavior）
  王爷模型的定义以及**交互**的编写，主要学习**JavaScript**



# 1、HTML标签

#### 1.1 书写规范

- 所有标签都应当写在 **<>** 之中，且大部分标签都应当成对出现，成为**双标签**，一些特殊标签单独出现，成为**单标签**
  双标签如：\<html>\</html> 、\<head>\</head> 等
  单标签如：\<input />、\<br />等



#### 1.2 标签关系

- 包含关系

  \<head>
      \<title>\</title>
  \</head>

- 并列关系

  \<head>\</head>
  \<body>\</body>



#### 1.3 基本结构

- \<html>\</html>HTML标签
  页面中最大的标签，称为根标签
- \<head>\</head>文档头部标签
注意：在head标签中一定要设置**title**标签
- \<title>\</title>文档标题标签
让页面拥有一个属于自己的标题
- \<body>\</body>文档主体标签
  包含文档的所有内容，页面内容都在**body**中



#### 1.4 基本标签

- 标题标签
  HTML提供了\<h1>~\<h6>六种标签，重要性最强\<h1> 依次下降，都为**双标签**

- **段落标签**\<p>\</p>

  - 将文字分成段落

  - 特点：

    - 双标签

    - 文本会根据窗口大小自动换行
    - 段落之间保有空隙

- **换行标签**\<br />

  - 特点：
    - 单标签
    - 只是另起一行，没有间隙

- 文本格式化标签
  为文本设置**加粗**、*倾斜*、<u>下划线</u>等效果

  - **加粗**
    - \<strong>\</strong>或者\<b>\</b>
  - *倾斜*
    - \<em>\</em>或者\<i>\</i>
  - <u>下划线</u>
    - \<ins>\</ins>或者\<u>\</u>
  - <s>删除线</s>
    - \<del>\</del>或者\<s>\</s>
  - 注意：都推荐使用前者，**语义**突出更强烈

- 盒子标签

  - \<div>\</div>
    类似于大盒子，独占一行，后面无法跟随内容
  - \<span>\</span>
    小盒子，一行可以放置多个
  - 没有语义，仅用于装内容

- 图像标签

  - \<img src="URL"> 
  - src 为图像标签的路径属性
    - 相对路径：图片相对于HTML页面文件的位置
      - 同一级：位于相同文件夹
      - 上一级：位于HTML的上一级文件夹
      - 下一级：位于HTML的下一级文件夹
    - 绝对路径：目录下的绝对位置，可以直接找到
  - 其他属性
    - alt 替换文本，当图像无法正常显示时可用文字替换
    - title 提示文本，用于显示文字提示
    - width/height 图像宽度/高度，仅设置一个可以实现等比例缩放
    - border 图像边框粗细，一般采用CSS修改
  - 注意：其他属性必须写在**src**后面，采用**键值对**的形式，且每个属性之间必须保留空格 
  
- 超链接标签

  - \<a href="跳转目标URL" target="目标打开方式">文本或图像\</a>
  - 属性：
    - href：目标地址，**必须属性**，标签应用后可进行超链接动作
    - target：链接打开方式
      - _self 为默认值，在同一个网页界面打开
      - _blank，新窗口打开
  - 超链接分类
    - 外部链接：用于链接外部网站，href属性值以”http://“开头
    - 内部链接：网站内部页面之间的链接，直接链接名称即可
    - 空链接：没有确定的链接目标时，以空链接形式代替，href=”#“
    - 下载链接：href内容为文件或者压缩包时，跳转链接会下载该文件
    - 网页元素链接：对网页中的各种元素添加超链接
    - 锚点链接：可以快速定位到页面中的某个位置
      - 第一步：在href属性中设置为#名字的形式，如\<a href="#two">第三集\</a>
      - 第二部：给目标位置添加一个id属性，如\<h3 id="two">
  
- 注释
  
  - \<!--注释文本-->
  - 内容给程序员看，内容不执行并且不会显示到页面当中
  
- 特殊字符：一些字符不方便使用，用以下代码代替

  - 空格（ ）：\&nbsp; 常用
  - 小于号（&lt;）: \&lt; 常用
  - 大于号（>）: \&gt; 常用
  - 与号（&）: \&amp;
  - 人民币（￥）: \&yen;
  - 版权（&copy;）: \&copy;
  - 注册商标（&reg;）: \&reg;
  - 摄氏度（&deg;）: \&deg;
  - 正负号（&plusmn;）: \&plusmn;
  - 乘号（&times;）: \&times;
  - 除号（&divide;）: \&divide;
  - 平方（&sup2;）: \&sup2;
  - 立方（&sup3;）: \&sup3;

  













