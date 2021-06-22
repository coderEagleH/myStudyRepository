"use strict";
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
    const obj = {
        name: "eagle",
        age: 10,
        gender: "男",
    };
    /**
     * 定义类时可以让类去实现一个接口
     *  implements 用于实现接口
     *  实现接口就是使类满足接口限制的结构
     */
    class myClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("hello");
        }
    }
})();
