(function () {
  // 定义一个Animal类
  class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sayHello() {
      console.log(`${this.name}："我在叫"`);
    }
  }

  /**
   * 使用extends进行继承操作
   *  - class Dog extends Animal {}
   *  - Dog被称为子类，Animal被称为父类
   *  - 此时Dog继承Animal的所有属性和方法
   *  - 通过集成可以将多个类中共有的代码写在一个父类中
   *    + 这样只需要写一次，就可以让所有的子类拥有父类的所有属性和方法
   *    + 如果需要在子类中添加一些父类没有的方法或者属性，直接加就行
   */

  // 定义一个Dog类
  // Dog继承Animal
  class Dog extends Animal {
    run() {
      console.log(`${this.name}在跑`);
    }
  }

  // 定义一个Cat类
  // Cat继承Animal
  class Cat extends Animal {
    /**
     * 在子类中有与父类相同方法时，子类中的方法会覆盖掉父类的
     * 这种覆盖我们称之为方法重写
     */
    sayHello() {
      console.log(`${this.name}："喵喵喵"`);
    }
  }

  const dog = new Dog("旺财", 3);
  const cat = new Cat("小白", 2);

  dog.sayHello();
  dog.run();
  cat.sayHello();
})();
