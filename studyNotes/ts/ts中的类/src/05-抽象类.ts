(function () {
  /**
   * 以abstract开头的类被称为抽象类
   *  - 抽象类与其他类区别不大，只是不能用来创建实例
   *  - 通俗点说：生来就是当父类的
   *
   *  - 抽象类中可以添加抽象方法
   */
  abstract class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    // 定义一个抽象方法
    // 抽象方法使用abstract开头，没有方法体
    // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
    abstract sayHello(): void;
  }

  class Dog extends Animal {
    gender: string;

    constructor(name: string, age: number, gender: string) {
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
