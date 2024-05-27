
/**
 * 找到连续字符串最多的 
 * 定义两个指针ij ，同时指向第一个字符，让i遍历依次向后，
 * 如果遍历后的i和j相等，那就累计长度，如果不相等就记录这个时候的长度，并且让j追上i
 * 
 * @param {*} str 
 */
function findChat(str) {
    let res = {
        char: '',
        length: 0
    }
    const length = str.length
    if (length === 0) return res
    let tempLength = 0// 记录临时的字符长度
    let i = 0
    let j = 0
    for (i; i <= length; i++) {
        if (str[i] === str[j]) {
            tempLength++
        } else if (str[i] !== str[j]) {
            // 不相等了 或者遍历结束了
            if (tempLength > res.length || i === length - 1) {
                res.char = str[j]
                res.length = tempLength
            }
            // 重置
            tempLength = 0
            if (i < length - 1) {
                j = i // 让j追上i
                i-- // 细节 因为两个在同一个位置了 再次遍历会少一位 继续第一步
            }
        }
    }
    return res
}
/**
 * 找到连续字符串最多的 
 * 跳步
 * @param {*} str 
 * @returns 
 */
function findChat2(str) {
    let res = {
        char: '',
        length: 0
    }
    const length = str.length
    if (length === 0) return res
    let tempLength = 0// 记录临时的字符长度
    for (let i = 0; i <= length; i++) {
        tempLength = 0
        for (let j = i; j < length; j++) {
            if (str[i] === str[j]) {
                tempLength++
            }
            if (str[i] !== str[j] || j === length - 1) {
                if (tempLength > res.length) {
                    res.length = tempLength
                    res.char = str[i]
                }
                if (i < length - 1) {
                    i = j - 1
                }
                break
            }
        }

    }
    return res
}
/**
 * qqq
 * 
 */
const str = 'qqqwww,eeefffffffrrrrr'
const str2 = 'qw,er'
const str3 = ''
const str4 = 'qqqqqqqqqqq'

console.log(findChat2(str));
console.log(findChat2(str2));
console.log(findChat2(str3));
console.log(findChat2(str4));
console.log(findChat2(str4));
