/* 
防抖
1.时间点击后 n秒后再执行
2.再次点击再次计时

*/
function debbounce(fn, delay) {
  let timer = null;
  return () => {
    let _this = this;
    args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(_this, [...args]);
    }, delay);
  };
}
/* 

节流
在一定时间内 点击多次 只有一次是有效的
*/
function throttle(fn, delay) {
  let now = Date.now();
  return function () {
    let _this = this;
    let newTime = Date.now;
    args = arguments;
    if (newTime - now > delay) {
      now = Date.now();
      return fn.apply(_this, args);
    }
  };
}

/* 
apply 和call 的传参不一样
*/
function MyApply(context) {
  if (typeof this !== "function") {
    throw new Error("this is not a function");
  }
  if (!context) {
    context = window;
  }
  let args = [...arguments].slice(1);
  let res = null;
  context.fn = this;
  if (args) {
    res = context.fn(...args);
  } else {
    res = context.fn();
  }
  delete context.fn;
  return res;
}
function MyCall(context) {
  if (typeof this !== "function") {
    throw new Error("this is not a function");
  }
  if (!context) {
    context = window;
  }
  let args = [...arguments].slice(1);
  let res = null;
  context.fn = this;
  res = context.fn(...args);
  delete context.fn;
  return res;
}
/* 
mybind

*/
function MyBind(context) {
  if (typeof this !== "function") {
    throw new Error("this is not a function");
  }
  if (!context) {
    context = window;
  }
  let args = [...arguments].slice(1);

  fn = this;
  return function Fn() {
    fn.apply(this instanceof Fn ? this : context, args.concat(...arguments));
  };
}

/* 
函数柯里化
*/
function curry(){
    
}
