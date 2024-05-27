/**
 * 快速排序
 * 先找到中间数
 * 小的放左边，大的放右边
 * 继续递归 concat 链接
 * @param {*} arr 
 */
function quickSort(arr) {
    let length = arr.length
    if (length === 0) return []
    let midIndex = Math.floor(length / 2)
    let midValue = arr.slice(midIndex, midIndex + 1)[0]
    let leftValue = []
    let rightValue = []
    for (let i = 0; i < length; i++) {
        if (i !== midIndex) {
            const n = arr[i]
            if (n < midValue) {
                leftValue.push(n)
            } else {
                rightValue.push(n)
            }
        }
    }
    return [...quickSort(leftValue), midValue, ...quickSort(rightValue)]
}

const arr = [2, 1, 5, 4, 3, 6, 8, 9, 7]
console.log(quickSort(arr));