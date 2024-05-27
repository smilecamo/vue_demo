
/**
 * 移动 0 到末尾 不改变原数组
 * @param {*} arr 嵌套循环的方式 (O(n^2))
 */
function moveZeroToEnd(arr) {
    let length = arr.length
    if (length == 0) return arr
    let zeroLength = 0 // 0的个数
    // 如果小于长度是 总的长度减去 0的个数
    for (let i = 0; i < length - zeroLength; i++) {
        if (arr[i] == 0) {
            arr.push(0) // 添加到最末尾
            arr.splice(i, 1)// 把当前的0删除
            i-- //因为 数组截取了一位 ，所以下标要往后面移动一位，这样才不会丢失数据
            zeroLength++ // 记录0的个数
        }
    }
    return arr
}

/**
 * 双指针 定义j指向第一个0，i指向j后面第一个非0，交换i和j；继续后移
 * @param {*} arr 
 * @returns 
 */
function moveZeroToEnd2(arr) {
    let length = arr.length
    if (length === 0) return
    let i // 指向j后面非0
    let j = -1 // 指向第一个0
    for (i = 0; i < length; i++) {
        if (arr[i] === 0) {
            // 第一个0
            if (j < 0) {
                j = i
            }
        }
        // 交换 
        if (arr[i] !== 0 && j >= 0) {
            const n = arr[i]
            arr[i] = arr[j]
            arr[j] = n
            j++
        }
    }
}
const arr = [0, 1, 3, 0, 5, 0, 1, 0, 2, 1, 0, 0, 121, 3, 0]
moveZeroToEnd2(arr)
console.log(arr);