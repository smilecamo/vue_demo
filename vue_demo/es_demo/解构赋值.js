// *******************数组结构赋值
let arr = "abcdef";
let [a, b, c] = arr;
// console.log(a, b, c);

// 对象重新赋值

let user = {
  name: "a",
  userName: "b"
};
[user.name, user.userName] = [1, 2];
// console.log(user.name, user.userName);

// 循环赋值

for (const [k, v] of Object.entries(user)) {
  // console.log(k,v)
}

// 剩余参数赋值
// 如果参数不够 为 undefined
let [first, cur, ...last] = [];
// console.log(first, cur, last);// undefined undefined []

// ******************object 结构赋值

let option = {
  width: 100,
  height: 200,
  size: {
    width: "width"
  },
  arr: ["arr1", "arr2", "arr3"],
  flag: 1,
  type: 2
};
// 可以重新命名 width: w
// 可以默认传参 title="hello"
// 剩余参数 ...ObjectLast
// 嵌套对象匹配  size: { width },
// 嵌套数组结构
let {
  width: w,
  height,
  size: { width },
  arr: [arrA, arrB, arrC],
  title = "hello",
  ...ObjectLast
} = option;
console.log(w, height, width, arrA, title, ObjectLast);