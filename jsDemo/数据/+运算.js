// console.log(10n + 1);// Cannot mix BigInt and other types, use explicit conversions
// console.log(Symbol() + 1); //  Cannot convert a Symbol value to a number


// 引用类型的原始值                                                                                                                           
// 数组没有 Symbol.toPrimitive ,也没有 valueOf 只能执行toString 进行转换
// typeof[][Symbol.toPrimitive] // undefined
// [].valueOf() // []
// [].toString() // ''

// typeof{}[Symbol.ToPrimitive]
// {}.valueOf() // {}
// {}.toString() // '[object object]'

// [].toString() == ''
// {}.toString() === [Object Object] 