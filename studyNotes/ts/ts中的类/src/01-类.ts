// 使用class来定义一个类
/**
 * 对象中主要包含了两个部分：
 *    属性
 *    方法
 */
class Person {
  // 定义属性
  name: string = "jiangniao";

  // 在属性前使用static关键字可以定义类属性
  age: number = 24;
}

const per = new Person();

per.name = "ealge";

console.log(per);
