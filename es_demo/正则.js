const s = "aaa_aaa---aaaaa";
const r1 = /a+/g; // 寻找下一个匹配项
const r2 = /a+/y; // sticky 粘性匹配
// console.log(r1.exec(s))
// console.log(r2.exec(s))
// console.log(r1.exec(s))
// console.log(r2.exec(s))
// 结果
// [ 'aaa', index: 0, input: 'aaa_aaa---aaaaa', groups: undefined ]
// [ 'aaa', index: 0, input: 'aaa_aaa---aaaaa', groups: undefined ]
// [ 'aaa', index: 4, input: 'aaa_aaa---aaaaa', groups: undefined ]
// null