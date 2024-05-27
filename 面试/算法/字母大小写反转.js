/**
 * 通过正则来反转
 * @param {*} str 
 * @returns 
 */
function switchLerrerCase(str) {
    let res = ''
    const length = str.length
    if (length === 0) return res
    const reg = /[a-z]/
    const reg2 = /[A-Z]/
    for (let i = 0; i < length; i++) {
        const c = str[i]
        if (reg.test(c)) {
            // toUpperCase 变成大写
            res += c.toUpperCase()
        } else if (reg2.test(c)) {
            // toLowerCase 变成小写
            res += c.toLowerCase()
        } else {
            res += c
        }
    }
    return res
}

/**
 * ASCII
 * 美国信息互换标准代码）是一套基于拉丁字母的字符编码，共收录了 128 个字符，
 * 用一个字节就可以存储，它等同于国际标准 ISO/IEC 646。
 * 65-90 A-Z
 * 97-122 a-z 
 * charCodeAt 
 * @returns 
 */
function switchLerrerCase2(str) {
    let res = ''
    const length = str.length
    if (length === 0) return res
    for (let i = 0; i < length; i++) {
        const c = str[i]
        const at = c.charCodeAt()
        if (at >= 65 && at <= 90) {
            res += c.toLowerCase()
        } else if (at >= 97 && at <= 122) {
            res += c.toUpperCase()
        } else {
            res += c
        }
    }
    return res
}
const res = 'qweASD'

console.info(switchLerrerCase2(res));