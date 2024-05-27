let a = [1, 2, 3, 4, 5, 6, 7]
let b = [3, 5, 7, 1, 2, 9, 10]

// 取到两个数组的并集

let a1 = new Set(a)
let b1 = new Set(b)

let union = [...new Set([...a1, ...b1])]
// console.log(union);

// 取交集

let interest = new Set([...a1].filter(item => {
    return b1.has(item)
}))
// console.log(interest);

// 取差集
let difference = new Set([...b].filter(item => {
    return !a1.has(item)
}))
console.log(difference);