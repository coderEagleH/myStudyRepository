"use strict";
(function () {
    /**
     * 以abstract开头的类被称为抽象类
     *  - 抽象类与其他类区别不大，只是不能用来创建实例
     *  - 通俗点说：生来就是当父类的
     *
     *  - 抽象类中可以添加抽象方法
     */
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class Dog extends Animal {
        constructor(name, age, gender) {
            super(name, age);
            this.gender = gender;
        }
        sayHello() {
            console.log(`${this.name}：汪汪汪`);
        }
    }
    const dog = new Dog("小黑", 3, "boy");
    // const animal = new Animal(); // 报错：无法创建抽象类的实例
    dog.sayHello();
})();
