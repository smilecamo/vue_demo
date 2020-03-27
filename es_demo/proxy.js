let o = {
  name: "xiaoming",
  price: 160
};
// *********************拦截 proxy
// 中介代理 改变原始数据
// let d = new Proxy(o,{
//   // 获取数据,并操作
//   get(target,key){
//     if(key === "price"){
//       return target[key] += 20
//     }else{
//       return target[key]
//     }
//   },
//   // 禁止设置
//   set(target,key,value){
//     return false
//   }
// })
// console.log(d.price,d.name)

// *******************拦截校验数据  proxy
// 监测捕捉错误
window.addEventListener("error",e=>{
  console.log(err.message)
},true)

let validator = (target, key, value) => {
  if (Reflect.has(target, key)) {
    if (key === "price") {
      if (value > 300) {
        // return false;
        // 不满足规则抛出一个错误 做错误监控
        throw new TypeError("price is > 300")
      } else {
        return (target[key] = value);
      }
    }
    {
      target[key] = value;
    }
  } else {
    return false;
  }
};
let d = new Proxy(o, {
  get(target, key) {
    return target[key] || "";
  },
  set:validator
});
// 修改 < 300 的可以
d.price = 666;
console.log(d.price, d.name);

// ***************生成一个id 唯一 可读不可写

class Component {
  constructor() {
    this.proxy = new Proxy({
      id: Math.random()
        .toString(32)
        .slice(-7)
    },{});
  }
  get id() {
    return this.proxy.id;
  }
}

let com1 = new Component();
let com2 = new Component();
console.log(com1.id, com2.id);

// *********** 销毁代理  定义revocable 使用 revoke

// let d = Proxy.revocable(o,{
//   get(target,key){
//     return target[key]
//   }
// })

// console.log(d.proxy.name,d)

// setTimeout(() => {
//   d.revoke()
//   setTimeout(() => {
//     console.log(d.proxy.name, d);
//   }, 1000);
// }, 1000);






// let proxyDemo = {
//   name: "lisi",
//   age: 18
// };
// // 需求姓名不能修改 年龄自动加一
// let proxy1 = new Proxy(proxyDemo, {
//   // 读取数据
//   get(target, key) {
//     // 判断读取内容是不是年龄 如果是加一
//     if (key === "age") {
//       return (target[key] += 1);
//     } else {
//       return target[key];
//     }
//   },
//   // 设置数据
//   set(target, key, value) {
//      // 判断修改的内容是不是名字  不修改数据
//     if (key === "name") {
//       return false;
//     } else {
//       // 修改数据为传过来的值
//       return (target[key] = value);
//     }
//   }
// });
// proxy1.name = "zhangsan"; // 数据不会被修改
// proxy1.age = 28; // 数据被修改为29
// console.log(proxy1.age);
