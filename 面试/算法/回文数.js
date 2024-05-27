/**
 * 给定一个值 返回所有的回文数
 * 通过 *10 和 %10 来判断是否是回文
 * @param {*} max 
 */
function findPalindromeNumbers(max) {
    const res = []
    if (max <= 0) return res
    for (let i = 1; i < max; i++) {
        let n = i
        let rev = 0 // 存储翻转数
        // 生成反转数
        while (n > 0) {
            rev = rev * 10 + n % 10
            n = Math.floor(n / 10)
        }
        if (i == rev) {
            res.push(i)
        }
    }
    return res
}
/**
 * 数字转字符 然后进行比较 反转字符
 * @param {*} max 
 * @returns 
 */
function findPalindromeNumbers2(max) {
    const res = []
    if (max <= 0) return res
    for (let i = 0; i < max; i++) {
        const s = i.toString()
        // split 根据字符串分割
        // reverse 反转字符串
        // join 数组转字符
        const r = s.split('').reverse().join('')
        if (s === r) {
            res.push(i)
        }
    }
    return res
}

/**
 * 头尾比较 
 * @param {*} max 
 * @returns 
 */
function findPalindromeNumbers3(max) {
    const res = []
    if (max <= 0) return res
    for (let i = 0; i < max; i++) {
        const s = i.toString()
        const length = s.length
        let flag = true
        let startIndex = 0
        let endIndex = length - 1
        while (startIndex < endIndex) {
            if (s[startIndex] !== s[endIndex]) {
                flag = false
                break
            } else {
                startIndex++
                endIndex--
            }
        }
        if (flag) res.push(i)
    }
    return res
}


console.log(findPalindromeNumbers3(100));