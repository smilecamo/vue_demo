/**
 * Map 是个构造器 构造出map对象
 * map key可以是任意类型
 * 取值 如果是引用类型，需要先定义引用类型
 */

// --------------基础开始---------------------

// const m = new Map()
// const obj = { name: '1234' }
// const arr = [1234]
// const fn = function set() { }
// m.set('name', 'zhangsan')
// m.set(obj, { name: '5678' })
// m.set(arr, [5678])
// m.set(fn, 'set')
// m.size()

// console.log(m.get('name'));
// console.log(m.get(obj));
// console.log(m.get(arr));
// console.log(m.get(fn));// 获取元素
// console.log('删除元素' + m.delete(fn))// 有元素并删除返回true
// console.log('删除元素' + m.delete(fn))// 无元素并删除返回false
// console.log('判断是否有元素' + m.has(arr))

// --------------基础结束---------------------

// const m = new Map()
// m.set(0, '1')// 同零相等 相等性mdn
// m.set(-0, '2')
// m.set(NaN, '3') // NaN !== NaN 但key会覆盖
// m.set(NaN, '4')
// console.log(m);

// ----------------------map和object的区别

/**
 * map 键名可以是引用类型 也可以是基本类型
 * object 键名只能是基本类型和symbol
 * 
 * Map 是有序的 可迭代的
 * Object 是无序的 不可迭代 ES2015规范 建议浏览器厂商对对象枚举采取有序化操作
 * 
 * Map 有size 可以获取长度
 * Object 没有size 不能获取长度 可以通过枚举计数和Object.keys()获取长度
 * 
 * Map z支持for of Symbol.iterator
 * Object 不支持
 * 
 * Map 操作做了全面优化 delete has 
 * Object 没用
 * 
 * Map 是没用序列化操作的 JSON.parse stringify
 * Object 纯数据是被支持的
 */

/**
 * @description 替换函数，将Map类型的值转换为特定格式的对象
 * @param {string} key - 键名
 * @param {Map} value - 值，类型为Map
 * @returns {any} - 转换后的值
 */
function replacer(key, value) {
    if (value instanceof Map) {
        return {
            type: 'Map',
            value: [...value]
        }
    } else {
        return value
    }
}

/**
 * reviver函数用于将解析后的JSON对象转换为Map对象
 * @param {string} key - JSON对象的键
 * @param {object} value - JSON对象的值
 * @returns {object|Map} - 转换后的value，如果value的type属性为'Map'则返回新的Map对象，否则返回value本身
 */
function reviver(key, value) {
    if (value.type === 'Map') {
        return new Map(value.value)
    }
    return value
}

const m = new Map()
m.set('name', 'zhangsan')
m.set('age', 18)
const ms = JSON.stringify(m, replacer)
const mp = JSON.parse(ms, reviver)
console.log(ms);
console.log(mp)


// --------------------WeakMap----------
/**
 * 键名只能是引用类型
 * 对于键名是弱引用 不确定里面的键值对
 * 弱引用不会被垃圾回收机制计数，所以不确定里面是否有键值对
 * 所以没用size clear forEach属性方法
 */ 