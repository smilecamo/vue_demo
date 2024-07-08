```js
Function.prototype.bind1 = function () {
  // 1. 将参数解析为数组
  const args = Array.form(arguments);
  // 2. 获取this 取出数组的第一项，剩余的就是传递的参数
  const t = args.shift();
  // 3. 获取自身的this
  const self = this;
  //4. 返回一个函数
  return function () {
    // 5. 执行原函数 返回结果
    return self.apply(t, args);
  };
};
// bind函数 返回一个新的函数，不会立即执行，第一个参数是this的指向，后续的参数依次传入
```
