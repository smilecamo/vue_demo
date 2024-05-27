/**
 * 二分查找
 * 凡有序必二分
 * 递归 代码逻辑更加清晰，需要多次执行函数
 * 非递归 性能更好
 * 时间复杂度O(logn)
 * 
 */

/**
 * 二分查找 循环方式
 * @param {*} arr 
 * @param {*} target 
 */
function binarySearch1(arr, target) {
    const length = arr.length
    if (length == 0) return -1
    let startIndex = 0
    let endIndex = length - 1

    while (startIndex <= endIndex) {
        let midIndex = Math.floor((startIndex + endIndex) / 2)
        let midValue = arr[midIndex]
        // 如果值在左边
        if (target < midValue) {
            endIndex = midIndex - 1
        } else if (target > midValue) {
            // 如果值在右边
            startIndex = midIndex + 1
        } else {
            return midIndex
        }
    }
    return -1
}
/**
 * 二分查找 递归方式
 * @param {*} arr 
 * @param {*} target 
 */
function binarySearch2(arr, target, startIndex, endIndex) {
    const length = arr.length
    if (length == 0) return - 1
    if (startIndex > endIndex) return - 1
    let midIndex = Math.floor((startIndex + endIndex) / 2)
    let midValue = arr[midIndex]
    if (target < midValue) {
        return binarySearch2(arr, target, startIndex, midIndex - 1)
    } else if (target > midValue) {
        return binarySearch2(arr, target, startIndex + 1, endIndex)
    } else {
        return midIndex
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let target = 4
console.log(binarySearch2(arr, target, 0, arr.length - 1));