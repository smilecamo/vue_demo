'use strict'
// 全局函数必须先声明
n = 100 // ❌
var n = 100 // ✅

// 禁止使用with
var obj = {
    x: 10,
    y: 100
}

// with (obj) {
//     console.log(x, y);
// }// ❌

// 创建eval作用域
eval('n=1000,console.log(n)') // 1000 ✅

// 禁止this 指向window
console.log(this);

// 函数参数名不能重复

function fn1(x, x, y) {

}// ❌ Duplicate parameter name not allowed in this context