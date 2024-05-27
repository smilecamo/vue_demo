// 有序的数组 中 值为 target 的两个数

/**
 * 两数之和 嵌套循环找 O(n^2) 不可用
 * @param {*} nums 
 * @param {*} target 
 */
function findTwoSum(nums, target) {
    let result = []
    let length = nums.length
    if (length === 0) return result
    for (let i = 0; i < length - 1; i++) {
        let flag = false
        for (let j = i + 1; j < length - 1; j++) {
            let num1 = nums[i]
            let num2 = nums[j]
            let sum = num1 + num2
            if (sum === target) {
                result.push(num1)
                result.push(num2)
                flag = true
                break
            }
        }
        if (flag) break
    }
    return result
}
/**
 * 两数之和 双指针 二分 找 O(n) 可用
 * @param {*} nums 
 * @param {*} target 
 */
function findTwoSum1(nums, target) {
    let result = []
    let length = nums.length
    if (length === 0) return result
    let startIndex = 0
    let endIndex = length - 1
    while (startIndex <= endIndex) {
        let num1 = nums[startIndex]
        let num2 = nums[endIndex]
        let sum = num1 + num2
        if (target > sum) {
            startIndex++
        } else if (target < sum) {
            endIndex--
        } else {
            result.push(num1)
            result.push(num2)
            break
        }
    }
    return result
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
let target = 31

console.time('findTwoSum');
for (let index = 0; index < 1000 * 10000; index++) {
    findTwoSum(arr, target)
}
console.timeEnd('findTwoSum');

console.time('findTwoSum1');
for (let index = 0; index < 1000 * 10000; index++) {
    findTwoSum1(arr, target)
}
console.timeEnd('findTwoSum1'); 