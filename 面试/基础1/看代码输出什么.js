// 不要去读代码，要模拟执行代码（js引擎）
// 原型和原型链
function Foo() {
    Foo.a = function () { console.log(1); }
    this.a = function () { console.log(2); }
}
Foo.prototype.a = function () { console.log(3); }
Foo.prototype.b = function () { console.log(100); }
Foo.a = function () { console.log(4); }

// Foo.a()//4  Foo.a 是一个静态属性，它被设置为一个函数，当调用 Foo.a() 时，会打印出 4
// let obj = new Foo()// {a:fn}
// obj.a()//2 this.a 是一个实例属性，它被设置为一个函数，当创建 Foo 的实例并调用 instance.a() 时，会打印出 2。这是因为实例属性会覆盖原型链上的同名属性
// obj.b()// 100 Foo.prototype.a 和 Foo.prototype.b 是原型方法，它们会被 Foo 的实例继承。当调用实例的 instance.a() 时，会打印出 3，而调用实例的 instance.b() 时，会打印出 100。
// Foo.a()//1 在 Foo() 函数内部，Foo.a 被重新定义为一个函数，当调用 Foo.a() 时，会打印出 1。这是因为函数内部的 Foo.a 会覆盖外部的 Foo.a


/**
 * Promise  then 交替执行
 * 如果有多个fulfilled promise实例，同时then链式调用
 * then会交替执行，编译器的优化 防止一个promise占用太久时间
 * then中返回promise实例，会出现‘慢两拍’的效果
 * 第一拍，promise需要由pending变为fulfilled
 * 第二拍，then需要挂载到MicroTaskQueue 参考Event Loop
 */

// Promise.resolve().then(() => {
//     console.log(1);
//     return Promise.resolve()
// }).then(() => {
//     console.log(2);// 慢两拍之后执行
// }).then(() => {
//     console.log(3);
// }).then(() => {
//     console.log(4);
// })
// Promise.resolve().then(() => {
//     console.log(10);
// }).then(() => {
//     setTimeout(() => {
//         console.log(20); //宏任务最后执行
//     }, 0)
// }).then(() => {
//     console.log(30);
// }).then(() => {
//     console.log(40);
// })
// Promise.resolve().then(() => {
//     console.log(100);
// }).then(() => {
//     console.log(200);
// }).then(() => {
//     console.log(300);
// }).then(() => {
//     console.log(400);
// })
// 1 10 100  200 30 300 2  40 400  3 4 20


/**
 * 值类型 引用类型
    连续赋值，倒序执行
    let n1,n2
    n1=n2=100
    相当于
    n2=100
    n1=n2
*/

// a.x的赋值的优先级高

// let a = {}
// a.x = 100
/**
 * 可拆解
 * 1. a.x = undefined 先初始化
 * 2. a.x =100 再赋值
 */
// let a = { n: 1 }
// a.x = a = { n: 2 }
// console.log(a);
/**
 * 可拆解
 * 1. a.x = undefined
 * 2. let x= a.x x变量是想象的 实际执行不存在
 * 3. x=a={n:2}
 */

/**
 * js 对象key的数据类型
 * 只能是字符串或者symbol类型
 * 其他类型会调用toString()方法转为字符串
 * Map的 key可以是各种类型
 * WeakMap的key只能是引用类型 不能是值类型，会报错
 */
let a = {}, b = '123', c = 123
a[b] = 'b' // a['123']='b'
a[c] = 'c' // a['123']='c'
console.log(a[b]);// c

let a2 = {}, b2 = Symbol('123'), c2 = Symbol(123)
a2[b2] = 'b' // symbol唯一值
a2[c2] = 'c'
console.log(a2[b2]);// b

let a3 = {}, b3 = { key: '123' }, c3 = { key: 123 }
a3[b3] = 'b' // a3['Object Object'] = 'b'
a3[c3] = 'c'// a3['Object Object'] = 'c'
console.log(a3[b3]);// c