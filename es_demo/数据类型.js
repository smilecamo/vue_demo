// Object 的表达 存储数据

let a = 2,
  b = 3,
  c = 6;
let objectA = {
  // es5 不能简写
  a: a,
  // es6 可以简写
  b,
  // es6 可以直接用数字作为key 或者是一个表达式
  [c + a]: c,
  // es5 函数声明
  a: function() {
    console.log("objectA");
  },
  // es6 函数声明
  b() {
    console.log("objectB");
  }
};
// console.log(objectA);
// objectA.a()
// objectA.b()

// Set 存储数据
// 1. 数据不能重复
// 2. 只要是可以遍历的就可以存储
// 3. 添加 用add()  setA.add('1').add("2")
// 4. 删除指定数据 delete()  清空 clear()
// 5. 查 查询是否有 has()  返回true/false
// 6. 读取 读取key keys()  读取value values() 读取key-value  entries()
// 6. 长度 size()
// 定义声明

let setA = new Set([1, 2, 3]);
setA
  .add("a")
  .add("b")
  .add("a");
setA.delete("a");

// console.log(setA);
// console.log(setA.has("a"));
// console.log(setA.keys());
// console.log(setA.values());
// console.log(setA.entries());
// setA.forEach(item => {
//   console.log(item);
// });



// Map

let mapA = new Map(); // 定义
function o() {
  console.log(a)
}
mapA.set(1,2); // 添加数据
mapA.set('a',0);
mapA.set(o, 0);
mapA.set(1,777); // 修改数据
// key键可以是任意类型
// mapA.delete(1); //删除数据
// mapA.clear();// 清空数据

// console.log(mapA)
// console.log(mapA.get(1)) //获取数据 => 7
// console.log(mapA.has(1)) // 判断是否包含 => true
// console.log(mapA.size); // 获取长度
// console.log(mapA.keys()); // 获取key
// console.log(mapA.values()); // 获取value
// console.log(mapA.entries()); // 获取key-value
// // 注意 forEach 的时候 第一项是value 第二项才是key
// mapA.forEach((value,key)=>{
//   console.log(key, value);
// })
// // for of 时 需要用[]包裹 
// for (const [kay,value] of mapA) {
//   console.log(kay, value);
// }

// 对象的复制 assign 浅拷贝

let target = {}
let source = { a: 1, b: 2 };
Object.assign(target,source)
// console.log(target);


console.log(document.getElementsByClassName("RichContent-inner").innerText);