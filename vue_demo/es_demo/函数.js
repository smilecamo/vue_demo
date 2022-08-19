
// 默认参数
let f = (x,y,z=x+y) => {
  return x+y-z
}

// console.log(f(5,2,3))


// rest 
function sum(base,...sums){
  let a =0
  sums.forEach(item=>{
    a += item * 1;
  })
  return base*2 + a;
}
// console.log(sum(1,2,3));

// 展开运算符
function add(x,y,z){
  return  x+y*z
}
// console.log(add(...[1,5,3]));

function funA(){
  let name = "a"
  console.log(this.name); // undefined 未找到
  console.log(this);  //指向调用者 window
}
// funA();

var o = {
  user: "name",
  funO: function(){
    console.log(this)
  }
};
// console.log(window);
// o.funO()
// window.o.funO()


