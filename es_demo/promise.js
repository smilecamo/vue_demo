// 异步加载js callback回调

// function loadScript(src,callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   // onload 加载好
//   script.onload = ()=>{
//     callback();
//   }
//   document.head.append(script);
// }
// function call(){
//   console.log("callback回调");
// }
// loadScript("./1.js", call);


// promise 
// 状态 开始创建 pending=>fulfilled||rejected
// 值 开始创建 undefined=>result||error
function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(src);
    script.onerror = err => reject(err);
    document.head.append(script);
  });
}

// 调用promise
// loadScript("./1.js")
//   .then(r => console.log(r))
//   .catch(e => console.log(e));

// 静态方法 Promise.方法名

// function test(bool){
//   if(bool){
//     return new Promise((resolve,reject)=>{
//       resolve(30)
//     })
//   }else{
//     return Promise.resolve(40)
//   }
// }
// test(0).then(r=>console.log(r))

// 异常处理 catch
// Promise.all 并行处理

let p1 = Promise.resolve(1)
let p2 = Promise.resolve(2)
let p3 = Promise.resolve(3)
Promise.all([p1,p2,p3]).then(res=>{
  console.log(res)
})

// 