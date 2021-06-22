(function () {
  class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sayHello() {
      console.log("动物在叫");
    }
  }

  class Dog extends Animal {
    gender: string;
    constructor(name: string, age: number, gender: string) {
      // 派生类的构造函数必须包含 "super" 调用
      super(name, age); // 调用父类的构造函数
      this.gender = gender;
    }
    saySomething() {
      // 在类的方法中，super就表示当前的父类
      super.sayHello();
    }
  }

  const dog = new Dog("旺财", 2, "boy");
  dog.saySomething();
})();
