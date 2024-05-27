// 1 NaN NaN

console.log([1, 2, 3].map(parseInt));

// parseInt
// 解析一个字符串，并返回十进制整数
// 第一个参数str,要解析的字符串，当以0x开头以16进制，其余是10进制
// 第二个参数 radix 基数进制，2-36
[1, 2, 3].map((item, index) => {
    return parseInt(item, index)
})