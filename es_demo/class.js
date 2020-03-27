
let Animal = function(type){
  this.type =type
}
// 通过原形链定义函数
Animal.prototype.cat=function(){
  // 调用静态方法
  Animal.work();
  console.log('i am eat cat')
}
// 静态方法  静态方法通过类直接调用
Animal.work=function(){
  console.log('i am eat work')
};

let dog = new Animal("dog")
let monkey = new Animal("monkey")
console.log(dog)
console.log(monkey)
monkey.cat = function(){
  console.log('object')
}
dog.cat()
monkey.cat();
// // es6 类
// let _age = 4
// class Animal {
//   // 构造函数  类的属性
//   constructor(type) {
//     this.type = type;
//   }
//   // 属性 getter setter 可以进行有条件的输出和输入修改
//   // 读取属性值
//   get age() {
//     return _age;
//   }
//   // 修改设置属性
//   set age(val) {
//     if (val > 4 && val < 7) {
//       _age = val;
//     }
//   }
//   // 类的方法 实例对象的方法 拿得到当前实例对象
//   eat() {
//     Animal.work();
//     console.log("i am eat");
//     console.log(this.type); // dog
//   }
//   // static 静态方法 通过类和方法名调用  拿不到当前实例对象
//   static work() {
//     console.log("i am work");
//     console.log(this.type);  // undefined
//   }
// }
// class Dog extends Animal{
//   constructor(type,_ages){
//     super(type)
//     this._ages = _ages;
//   }
//   ages(){
//     console.log(this._ages);
//   }
// }

// let dog = new Dog('dog',18)
// dog.ages()
// // 实例化一个类
// let monkey = new Animal("monkey");
// // console.log(monkey)

// // 给类的属性重新赋值
// monkey.age = 99;
// // 打印出类的属性
// // console.log(monkey.age);
// // 调用类的实例方法
// // monkey.eat();

let _age = 4
class Animals {
  // 属性
  constructor(_type) {
    this._type = _type;
  }
  // 方法 实例方法 可以使用内部数据
  eat() {
    // 静态方法 通过类名加方法名调用
    Animals.work();
    console.log(this._type);
  }
  // 方法 静态方法 不能访问内部数据
  static work(){
    console.log('i am work ')
  }
}

let dogs = new Animals("dog");
dogs.age=8;
// console.log(dogs.age);


// 通过extends 进行继承
class miniDog extends Animals{
  constructor(props){
    super(props)
    this.age =age
  }
  mini(){
    console.log('object')
  }
}

// 外部调用实例方法
// dogs.eat();
// 静态方法 也可以在外部调用静态方法
// Animals.work();