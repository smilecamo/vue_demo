// 随机的16进制的颜色  
// toString 转为字符串 16进制
// substring(a,b) 截取字符串 返回从下标为 a到b 的字符串 不传b 则是从a到字符串末尾 
// padEnd(targetLength,padString)  字符串补全  补全到targetLength长度  补全的字符串为padString  如果不传padString 则默认补全空格
// padStart(targetLength,padString)  字符串补全  补全到targetLength长度  补全的字符串为padString  如果不传padString 则默认补全空格
function randomColor() {
    return '#' + Math.random().toString(16).substring(2, 8).padEnd(6, '0')
}
console.log(randomColor());

// 随机的字符串 为什么是36  因为36进制的 字符个数为10  所以可以用36进制来生成字符串
function randomString(length = 6) {
    if (length <= 11) {
        return Math.random().toString(36).substring(2, 2 + length).padEnd(length, '0')
    } else {
        return randomString(11) + randomString(length - 11)
    }
}
console.log(randomString(10));