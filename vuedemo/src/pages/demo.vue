<template>
  <div>

  </div>
</template>

<script setup lang="ts">
// const promise1Success = Promise.resolve('promise1Success')
// const promise2Success = Promise.resolve('promise2Success')
// const promise3Success = Promise.resolve('promise3Success')
// const promise1reject = Promise.reject('promise1reject')
// const promise2reject = Promise.reject('promise2reject')
// const promiseSettime = new Promise((res,rej)=>{
// setTimeout(() => {
//   if(1){
//   res('s1')
// }else{
//   rej('a1')
// }
// }, 4000);
// })
// const promiseSettime2 = new Promise((res,rej)=>{
// setTimeout(() => {
//   if(false){
//   res('s2')
// }else{
//   rej('a2')
// }
// }, 1000);
// })
// // 知道所有程序的状态 必须全部执行结束
// Promise.allSettled([promise1Success,promise2Success,promise3Success,promise1reject,promise2reject,promiseSettime]).then(res=>{
//   console.log(res);
// }).catch(e=>{
//   console.log(e);
// })
// // 只要一个reject就立即结束 reject的是第一个抛出的错误信息
// Promise.all([promise1Success,promise2Success,promise3Success,,promise1reject,promise2reject,promiseSettime]).then(res=>{
//   console.log(res);
// }).catch(e=>{
//   console.log(e);
// })
// // 只要一个resolve就立即结束 resolve的是第一个抛出的正确信息，只会返回正常的 如果没有 fulfilled (成功的) promise，Promise.any() 返回 AggregateError 错误
// Promise.any([promise1Success,promise2Success,promise3Success,,promise1reject,promise2reject,promiseSettime]).then(res=>{
//   console.log(res);
// }).catch(e=>{
//   console.log(e);
// })
// // 返回第一个执行结束的，不管成功还是失败
// Promise.race([promiseSettime2,promiseSettime]).then(res=>{
//   console.log(res);
// }).catch(e=>{
//   console.log(e);
// })
// 空值合并运算符  
// console.log(null ?? 'q'); //q
// console.log(undefined ?? 'q'); //q


// console.log(0 ?? 'q');//0
// console.log(false ?? 'q');//false
// console.log(true ?? 'q');//true
// console.log(NaN ?? 'q');//NAN
// console.log('p' ?? 'q');//'p'
// console.log('' ?? 'q');//''


// 可选连操作符
// let obj = {
//   name:'name',
//   age:18,
//   ['prop' + 'Name']:'propsName',
//   fn(){
//     return 'name'
//   }
// }
// let arr = [1,2,3,4,5,6,7]
// let mapDemo = new Map()
// mapDemo.set('foo',{name:'name'})
// console.log(obj?.age); // 18
// console.log(obj?.sex); // undefined
// console.log(obj.fn?.()); // name
// console.log(obj?.['prop' + 'Name']); // propsName

// console.log(arr?.[4]); // 5 
// console.log(arr?.[43]); // undefined

// console.log(mapDemo.get('foo')?.name);

// // 可选链操作符 和 空值合并操作符

// console.log(obj?.sex ?? 'sex'); // sex


// replaceAll 全部替换
// let replaceAllDemo = '12131`3124214122`121`'
// let replace =  '12131`3124214122`121`'
// console.log(replaceAllDemo.replaceAll('1','a'));
// console.log(replaceAllDemo.replace('1','a'));

// console.log(replaceAllDemo.replaceAll(/3/g,'b'));
// console.log(replaceAllDemo.replace(/3/g,'b'));


// 逻辑等于赋值 &&= 前面是false的话 会使用后面的值
// let x = 0;
// let y = 1;
// // console.log(x &&= 2); // 0
// // console.log(x &&= 2); // 0
// // console.log(y &&= 2); // 2
// // console.log(y &&= 2); // 2
// console.log(x && (x= 2)); // 0
// console.log(x && (x= 2)); // 0
// console.log(y && (y= 2)); // 2
// console.log(y && (y= 2)); // 2

// 数组 at 根据索引 获取值
// slice(-2,-1) 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素
// let arr = ['css','html','js']

// console.log(arr[arr.length - 2]); // 取倒数第二项
// console.log(arr.slice(-2,-1)[0]);// 取倒数第二项
// console.log(arr.at(-2));// 取倒数第二项

// console.log(arr[1]); // 取倒数第二项
// console.log(arr.slice(1,-1)[0]);// 取倒数第二项 
// console.log(arr.at(1));// 取倒数第二项

if ("geolocation" in navigator) {
  /* 地理位置服务可用 */
  console.log('地理位置服务可用');
  // 获取当前位置 
  // : 默认情况下，getCurrentPosition() 会尽快返回一个低精度结果，这在您不关心准确度只关心快速获取结果的情况下很有用。
  // 有 GPS 的设备可能需要一分钟或更久来获取 GPS 定位，在这种情况下 getCurrentPosition() 会返回低精度数据（基于 IP 的定位或 Wi-Fi 定位）。
  
  // 配置项目
  const options = {
    enableHighAccuracy:false, // true 精度最高，但会电量增加和时间比较长
    timeout:500, // 必须在多少毫秒内 返回一个位置
    maximumAge:0 // 可以返回多少毫秒时间内的缓存数据
  }
  navigator.geolocation.getCurrentPosition(function(success){
    console.log(success);
  },err=>{
    console.log(err);
  },options);
  navigator.geolocation.watchPosition(suc=>{
    console.log(suc);
  },err=>{
    console.log(err);
  })
} else {
  /* 地理位置服务不可用 */
  console.log('地理位置服务不可用');
}
</script>

<style scoped>

</style>