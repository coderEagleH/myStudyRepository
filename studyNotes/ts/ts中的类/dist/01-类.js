"use strict";
// 使用class关键字来定义一个类
/**
 * 对象中主要包含了两个部分：
 *    属性
 *    方法
 */
class Person {
    constructor() {
        /**
         * 直接定义的属性是实例属性，需要通过实例去访问
         *    const per = new Person();
         *    per.age
         *
         * 使用static开头定义的属性，是静态属性（类属性），可以直接通过类访问
         *    Person.age
         *
         * 使用readonly开头的属性，表示是一个只读属性，无法修改
         */
        // 定义属性
        this.name = "jiangniao";
    }
    // 定义方法
    // 实例方法
    sayHello() {
        console.log("hello 大家好！");
    }
    // 静态方法（类方法）
    static sayNo() {
        console.log("No way！");
    }
}
// 在属性前使用static关键字可以定义类属性（静态属性）
Person.age = 24;
const per = new Person();
per.sayHello();
Person.sayNo();
// console.log(Person.age);
