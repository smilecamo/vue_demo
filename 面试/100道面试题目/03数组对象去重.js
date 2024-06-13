// 1. 通过 new Set() 存放不重复的值得特性
// 2. 通过对象的key值不重复的特性 循环加对象
// 3. 双循环比较
// 4. 通过sort排序，对比尾部和下一个是否相同
// 5. filter 加 indexOf

let arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  1,
  2,
  3,
  4,
  5,
  6,
  null,
  null,
  undefined,
  {},
  {},
  [1],
  [1],
];

// 1. 通过 filter 结合 indexOf
// function unique(array) {
//   return array.filter((item, index) => {
//     return array.indexOf(item) !== index;
//   });
// }

// 2. 通过 Set
// Array.prototype.unique = function () {
//   // this 指向调用者
//   return Array.from(new Set(this));
// };
// 3. 通过双循环 juˈniːk
// Array.prototype.unique = function () {
//   let arr = [];
//   let isRepeat = false;

//   for (let i = 0; i < this.length; i++) {
//     isRepeat = false;
//     for (let j = i + 1; j < this.length; j++) {
//       if (this[i] == this[j]) {
//         isRepeat = true;
//         break;
//       }
//     }
//     if (!isRepeat) {
//       arr.push(this[i]);
//     }
//   }
//   return arr;
// };
// 3. 双循环 第二种写法
// Array.prototype.unique = function () {
//   let _arr = [];
//   let isRepeat = false;
//   for (let i = 0; i < this.length; i++) {
//     isRepeat = false;
//     for (let j = 0; j < _arr.length; j++) {
//       if (this[i] == _arr[j]) {
//         isRepeat = true;
//         break;
//       }
//     }
//     if (!isRepeat) {
//       _arr.push(this[i]);
//     }
//   }
//   return _arr;
// };
// 双循环
Array.prototype.unique = function () {
  let _arr = [];
  for (let i = 0; i < this.length; i++) {
    if (!_arr.includes(this[i])) {
      _arr.push(this[i]);
    }
  }
  return _arr;
};
// 4. 通过循环加对象 对象的key不重复
// Array.prototype.unique = function () {
//   let arr = [];
//   let obj = {};
//   for (let i = 0; i < this.length; i++) {
//     if (!obj[this[i]]) {
//       obj[this[i]] = 1;
//       arr.push(this[i]);
//     } else {
//       obj[this[i]]++;
//     }
//   }
//   console.log(obj);
//   return arr;
// };
// 5. 通过sort和reduce
// Array.prototype.unique = function () {
//   return this.sort((a, b) => a - b).reduce((pre, cur) => {
//     if (pre.length === 0 || pre[pre.length - 1] !== cur) {
//       pre.push(cur);
//     }
//     return pre
//   }, []);
// };
// sort + 循环
// Array.prototype.unique = function () {
//   let _arr = [];
//   const array = this.sort((a, b) => a - b);
//   for(let i =0;i<this.length;i++){
//     if(array[i] !== array[i-1]){
//         _arr.push(array[i]);
//     }
//   }
//   return _arr
// };
console.log(arr.unique());
