# 单点登录 SSO

## 定义：

    在多个应用系统中，用户只需要登录一次，就可以访问所有相互信任的系统
    sso一般需要一个认证中心（passport),子系统的登录均通过passport,子系统本身不参与登录

## 实现:

### 1. 同域名下

可以通过共享 Cookie 的方式，具体操作就是设置 Cookie 的 Domain 属性为同一个顶级域名，则各个站点都能获取到这个 Cookie，也就能获取到同一个 Session，实现登录状态的共享。不过这种方式的普适性不太好，不同的域名之间就做不到，而且共享 Cookie 安全性上也会有点问题。

### 2. 不同域名下一

通过引入一个 SSO 站点，所有的登录请求和登录状态同步请求都交给这个站点来处理。这里假设有两个站点需要同步登录状态：站点 A 和 站点 B，用户访问站点 A 时没有登录过，需要在 SSO 站点先登录，然后登录状态同步到站点 A，访问站 B 时，因为用户已经登录过，所以只需要将登录状态同步到站点 B 即可

## 不同模式实现

session + cookie 方式
有一个地方专门存着 session ,每次子系统请求的时候就去认证中心验证，如果这个 session 不存在就证明需要重新登录，
token 模式
双 token

### token 跨域

前端通过 iframe+postMessage() 方式，将同一份 Token 写入到了多个域下的 LocalStorage 中，前端每次在向后端发送请求之前，都会主动从 LocalStorage 中读取 Token 并在请求中携带，这样就实现了同一份 Token 被多个域所共享

此种实现方式完全由前端控制，几乎不需要后端参与，同样支持跨域

##

```js
// 获取 token
var token = result.data.token;

// 动态创建一个不可见的iframe，在iframe中加载一个跨域HTML
var iframe = document.createElement("iframe");
iframe.src = "http://app1.com/localstorage.html";
document.body.append(iframe);
// 使用postMessage()方法将token传递给iframe
setTimeout(function () {
  iframe.contentWindow.postMessage(token, "http://app1.com");
}, 4000);
setTimeout(function () {
  iframe.remove();
}, 6000);

// 在这个iframe所加载的HTML中绑定一个事件监听器，当事件被触发时，把接收到的token数据写入localStorage
window.addEventListener(
  "message",
  function (event) {
    localStorage.setItem("token", event.data);
  },
  false
);
```

# 无感刷新

## JWT

JWT 是全称是 JSON WEB TOKEN，是一个开放标准，用于将各方数据信息作为 JSON 格式进行对象传递，可以对数据进行可选的数字加密，可使用 RSA 或 ECDSA 进行公钥/私钥签名。

### 优势

1. 数据体积小，传输速度快
2. 无需额外资源开销来存放数据
3. 支持跨域验证使用

### 弊端

1. 生成出来的 Token 无法撤销，即使重置账号密码之前的 Token 也是可以使用的（需等待 JWT 过期）
2. 无法确认用户已经签发了多少个 JWT
3. 不支持 refreshToken

### refreshToken

当用户的 accessToken 过期了，用来重新刷新 accessToken 的凭证
accessToken 过期时间短，有了 refreshToken 可以降低 accessToken 被盗的风险

### 实现

在用户登录应用后，服务器会返回一组数据，其中就包含了 accessToken 和 refreshToken，每个 accessToken 都有一个固定的有效期，如果携带一个过期的 token 向服务器请求时，服务器会返回 401 的状态码来告诉用户此 token 过期了，此时就需要用到登录时返回的 refreshToken 调用刷新 Token 的接口（Refresh）来更新下新的 token 再发送请求即可。

### 步骤

1. 响应拦截判断 accessToken 是否过期
2. 过期了就使用 refreshToken 刷新 token
3. 等待刷新 token 接口返回 token
4. 如果 refreshToken 也过期了，就跳转到登录
5. 如果获取到了最新的 accessToken,设置请求头中的 token 为最新的 token
6. 然后重新发起请求

```js
let promise = null;
function refreshToken() {
  // 如果已经发起请求了，就不用再次发送，避免多次刷新token
  if (promise) {
    return promise;
  }
  promise = new Promise(async (resolve) => {
    const resp = await axios.get("refresh_token", {
      headers: {
        Auth: `Brarer ${getRefreshToken}`,
      },
      __isRefreshToken: false, //是否需要刷新refreshToken
    });
    // if (resp.code == 0) {
    //   return resp.token;
    // }
    return resp.code == 0
  });
  //   请求完成后重置Promise
  promise.finally(() => {
    promise = null;
  });
}
// 是否需要刷新token,请求 accessToken的请求不需要刷新token
function isRefreshToken(config) {
  return config.__isRefreshToken;
}
// axios的响应拦截片段
function async response(res) {
  // `config` 是 `axios` 请求的配置信息
//   如果登录失效，并且请求新token的接口也是失效
  if (res.data.code == 401 && !isRefreshToken(res.config)) {
      const isSuccess = await refreshToken
      if(isSuccess){
        // 设置新token
        res.config.headers.Authorization = `Brarer `
         // 重新请求
        const resp = await ins.request(res.config)
        return resp
      }
  }else{
    // 到登录页
  }
}
```
### axios 
从 v0.22.0 开始，Axios 支持以 fetch API 方式—— AbortController 取消请求：
CancelToken  此 API 从 v0.22.0 开始已被弃用，不应在新项目中使用。