/**
 * 数字千分位 123456789转为123，456，789
 * @param {*} n 
 */
function format(n) {
    n = Math.floor(n)
    const s = n.toString()
    const arr = s.split('').reverse()
    return arr.reduce((prev, val, index) => {
        if (index % 3 === 0) {
            if (prev) {
                return val + ',' + prev
            } else {
                return val
            }
        } else {
            return val + prev
        }
    }, '')
}

function format2(n) {
    n = Math.floor(n)
    const s = n.toString()
    let res = ''
    let length = s.length
    for (let i = length - 1; i >= 0; i--) {
        const j = length - i
        if (j % 3 === 0) {
            if (i === 0) {
                res = s[i] + res
            } else {
                res = ',' + s[i] + res
            }
        } else {
            res = s[i] + res
        }
    }
    return res
}

const n = 134567889
console.log(format2(n));