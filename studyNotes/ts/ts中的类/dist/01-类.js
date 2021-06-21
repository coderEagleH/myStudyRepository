"use strict";
// 使用class来定义一个类
/**
 * 对象中主要包含了两个部分：
 *    属性
 *    方法
 */
class Person {
    constructor() {
        // 定义属性
        this.name = "jiangniao";
        // 在属性前使用static关键字可以定义类属性
        this.age = 24;
    }
}
const per = new Person();
per.name = "ealge";
console.log(per);
