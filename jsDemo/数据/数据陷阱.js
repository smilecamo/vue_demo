/**
 * 判断是不是Object
 * 1.有什么问题 typeof null == 'object'
 * 2. 为什么null也是object 历史遗留的bug
 * 在 javascript 的最初版本中，使用的 32位系统，js为了性能优化，使用低位来存储变量的类型信息。
 * 000 object
 * 001 integer 整数
 * 010 double 浮点数
 * 100 string 字符串
 * 110 boolean 布尔
 * 000000 全为0  null 
 * 111111 全为1 undefined
 */

// function isObject(p) {
//     if (typeof p == 'object') {
//         return true;
//     }
//     return false;
// }
// console.log(null == null);   // true
// console.log(undefined == undefined);  // true
// console.log(null === null);   // true
// console.log(undefined === undefined);  // true
// console.log(null == undefined);   // true
// console.log(null === undefined);   // false

/**
 * 一元运算符 + 转为数字
 */
function toNumber(val) {
    return +val
}
// console.log(toNumber(1));// 1
// console.log(toNumber('1'));//1
// console.log(toNumber(null));//0
// console.log(toNumber(true));//1
// console.log(toNumber([]));//0

// console.log(toNumber('123.45.67'));//NaN
// console.log(toNumber({ name: 1 }));//NaN
// console.log(toNumber({}));//NaN
// console.log(toNumber([1, 2, 3]));//NaN
// console.log(toNumber(undefined));// NaN

// console.log(toNumber(BigInt()));// Cannot convert undefined to a BigInt
// console.log(toNumber(Symbol()));// Cannot convert a Symbol value to a number
/**
 * 位移转为数字
 * 32位有符号位移和无符号位移
 */

// 使用带符号右移运算符 >> 进行转换
function toNumber1(val) {
    return val >> 0
}
//  使用无符号右移运算符 >>> 进行转换
function toNumber2(val) {
    return val >>> 0
}

/**
 * 字符串批量转为数字
 * parInt(val,2-36)
 */

function mapParInt(arr) {
    return arr.map(toNumber)
}
/**
 * if条件判断
 * if判断会转为false 如果name为0或null 就不会走判断了
 * 什么值会是false 0,null,undefined,false,NaN,''
 * 如果想判断object上是否有某个属性 应该用Object.hasOwnProperty(obj,key)
 */
const result = {}
function ifHas(obj) {
    if (obj.name) {
        result.name = obj.name
    }
    return result
}
function ifHas2(obj) {
    if (obj.hasOwnProperty('name')) {
        result.name = obj.name
    }
    return result
}
console.log(ifHas({ name: '' }));
console.log(ifHas2({ name: '' }));
/**
 * 宽松比较 隐形转换
 * === 与 == ：本质上的区别是会不会对操作数进行强制类型转换
 * 宽松相等（==）在操作数类型不相同的时候会进行强制类型转换，而严格相等（===）则不会进行强制类型转换。
 * null ==0
 * '0' == false
 * NaN 永远不等于NaN
 * bigInt symbol仅当两个操作值相同时才会相等
 * null undefined 
 * boolean 和其他类型比较 boolean会先转为数字类型
 * 数字类型和字符串相比较 字符串会转为数字类型
 * 对象类型和原始类型比较 对象类型会使用valueof或tostring转为基本类型
 * 所以在任何时候都不建议使用 == true 或者 == false 进行判断，因为由于隐式强制类型转换的存在，1==true、0==false等等这些判断都成立，
 * 但是它们可能都不是你想要的，这很容易让你的代码出现意料之外的问题，并且不容易被发现和排查到。
    果x是布尔值，会返回ToNumber(x) == y的结果
    如果y是布尔值，会返回x == ToNumber(y)的结果
*/
// console.log(null == undefined);// true
// console.log(null === undefined);// false
// const a = 0
// const b = '123'
// const c = false
// const d = true
// console.log(b == d);// false '123'转为123 true 转为1
// console.log(a == c);//true
/**
 * typeof 比 instanceof快200倍？ 错，百万次只是相差两倍
 * null 关键字） 和 undefined (变量) 机制
 * 
 */

// console.log(isNumber(123)); // false
// console.log(isNumber('abc'));//true
// console.log(isNumber(NaN));// true

/**
 * NaN 字面上代表“不是数字”，尽管这个标签/描述非常糟糕且具有误导性，将 NaN 视为“无效数字”、“失败数字”甚至“坏数字”会更准确，而不是将其视为“不是一个数字”。
 * 一个是不和自身相等；第二个是在Object.is中又是相等的；第三个是表示的语义为：not a number
 * isNaN() 与 Number.isNaN()区别
 * ES6之后, Number 构造函数也添加了 isNaN 静态方法，它首先判断一个值是否是number类型，再判断该值是否为NaN;
 * isNaN 会先检查toNumber的返回值，如果是NaN，则返回true，否则返回false;
 * Number.isNaN() 先判断一个值是不是number,然后判断值是不是等于NaN
 */
// console.log(isNaN(NaN));// true
// console.log(isNaN('120'));// false
// console.log(isNaN(undefined));// true
// console.log({});//true
// console.log(isNaN(10n));
// console.log(isNaN(symbol()));

// console.log(Number.isNaN(NaN));// true
// console.log(Number.isNaN('120'));// false
// console.log(Number.isNaN(undefined));// false
// console.log(Number.isNaN({}));//false
// console.log(Number.isNaN(10n));//false
// console.log(Number.isNaN(Symbol()));//false

// Number.isNaN(NaN);可以类比下面的代码
function isNaNVal(val) {
    if (typeof val === 'number') {
        return false
    }
    return Object.is(val, NaN)
}

// 综合垫片

if (!('isNaN' in Number)) {
    Number.isNaN = function (val) {
        return typeof val === 'number' && isNaN(val)
    }
}