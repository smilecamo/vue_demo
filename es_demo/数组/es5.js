// 数组遍历
// for 循环

const arr =[1,2,3,4,5,6,6,6]
// es5 for 循环 支持break 和 continue
for(let i=0;i<arr.length;i++){
  if(arr[i] === 2){
    break
  }
  // console.log(arr[i])
}
// es5 forEach 不支持break 和 continue
let a;
a = arr.forEach(item=>{
  return item>999
})
// console.log(a);

// es5 every 只有返回true时才继续遍历 
// every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。
// every() 方法使用指定函数检测数组中的所有元素：
b = arr.every(item=>{
return item > 10
})
// console.log(b);
// for in 支持break continue  索引

for (let a in arr){
  // console.log(a,arr[a])
}

// es6 for of 
for (let a of arr) {
  // console.log(a)
}

// -----------------数组转换----------------------
// 伪数组 有索引 有长度
// 伪数组转换数组 选用Array.form()'


// -----------------生成新数组---------------------

// es5 
// let attR = Array(5);
// let attR = ['',''];
// console.log(attR);
// let arr = [1,1,1,1,1]
// es6

// 声明一个长度为5的数组
let array = Array.from({length:5},()=>{
  return 1
})
// console.log(array);

// 声明一个长度为5的数组
let array2 = Array(5).fill(1)
// console.log(array2);

// fill(value,start,end)  fill() 方法用于将一个固定值替换数组的元素。不含end
let array1 = Array(9).fill(3,1,5)
// console.log(array1);

// -----------------数组查找---------------------
// 查找 1. 验证是否存在  2. 全部取出来符合的

// filter 根据数组格式返回数据,没有返回[]
// 从头到尾全部查询一遍  
let find = arr.filter(item => {
  return item == 2;
});
// console.log(find);


// find 返回数据 没有返回 undefined 
// 只要找到一个符合的就停止
let find1 = arr.find((item)=>{
  return item %2  == 0
})
// console.log(find1);

// 返回索引 没有返回 -1
let find2 = arr.findIndex(item=>{
  return item === 9
})
// console.log(find2);

// 返回true false
let find3 = arr.includes(6)
// console.log(find3);

let find4 = arr.lastIndexOf(8)
// console.log(find4);

// ---------------- 数组求和 

let sum = arr.reduce((a,b)=>{
  return a+b
})
// console.log(sum);
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var energy = fruits.join('|'); // 数组转换成字符串
// console.log(energy);
fruits.unshift("aaa");
// fruits.forEach(i => console.log(i));
var ages = [3, 10, 18, 20,1,2,1,];
// let aaas = ages.sort((a,b)=>{
//   return b-a
// });// 排序

// ages.pop();// 删除最后一个元素并返回新数组
ages.splice(0,1,'a') //splice(index,howmany,value) 从第几项删除并添加元素
console.log(ages);