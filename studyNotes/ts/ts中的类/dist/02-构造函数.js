"use strict";
class Dog {
    // 使用函数构造器构造函数
    // 使用new关键字 = 调用了函数构造器
    constructor(name, age) {
        // 在实例的方法中，this表示当前实例
        // 在构造函数中，this表示当前创建的实例对象
        // 可以通过this向当前创建的实例对象中添加属性
        this.name = name;
        this.age = age;
    }
    bark() {
        // 谁调用了bark()方法，this就指向谁
        console.log(`${this.name}:"汪汪汪！"`);
    }
}
const dog = new Dog("旺财", 3);
const dog2 = new Dog("小白", 2);
dog.bark(); // 旺财："汪汪汪"
