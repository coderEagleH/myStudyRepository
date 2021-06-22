(function () {
  /**
   * 描述一个对象的类型
   *  type myType = {
   *    name: string;
   *    age: number;
   *  };
   *  const obj: myType = {
   *    name: "eagle",
   *    age: 10,
   *  };
   */

  /**
   * 接口用来定义一个类或对象的结构，用来定义一个类中应该包含哪些属性和方法
   * 同时接口也可以当成类型声明去使用
   * 区别在于
   *  - type类型声明禁止重复声明
   *  - interface可以重复声明，以多次声明总和为准
   */
  interface myInterface {
    name: string;
    age: number;
  }
  interface myInterface {
    gender: string;
  }
  const obj: myInterface = {
    name: "eagle",
    age: 10,
    gender: "男",
  };

  /**
   * 接口可以在定义类的时候去限制类的结构
   *  - 接口中的所有属性和方法都不能有实际的值和方法提
   *  - 接口只定义对象的结构，而不考虑实际的值
   *    + 在接口中，所有的方法都是抽象方法（abstract）
   */
  interface myInter {
    name: string;

    sayHello(): void;
  }

  /**
   * 定义类时可以让类去实现一个接口
   *  implements 用于实现接口
   *  实现接口就是使类满足接口限制的结构
   */
  class myClass implements myInter {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    sayHello() {
      console.log("hello");
    }
  }
})();
