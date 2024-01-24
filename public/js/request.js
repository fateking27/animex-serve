axios.defaults.baseURL = "http://127.0.0.1:3004";
axios.interceptors.request.use(
  // config:相当于  请求报文（报文行，报文头，报文体）
  function (config) {
    // 在发送请求之前做些什么--进行token的请求头的设置
    let token = localStorage.getItem("users_token");
    let admin_token = localStorage.getItem("admin_token");
    // 判断是否有token，如果有才进行设置
    // if (token) {
    //   config.headers["authorization"] = token;
    // } else {
    //   alert("登录已失效，请重新登录");
    //   location.href = "./login.html";
    // }
    if (admin_token) {
      config.headers["authorization"] = admin_token;
    } else {
      alert("登录已失效，请重新登录");
      location.href = "./login.html";
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function (response) {
    console.log(1);
    if (response.status == 401 || response.status == 403) {
      alert("登录已失效，请重新登录");
      location.href = "./login.html";
    }
    return response;
  },
  function (error) {
    console.log(2);
    if (error.response.status == 401 || error.response.status == 403) {
      alert("登录已失效，请重新登录");
      location.href = "./login.html";
    }
    return Promise.reject(error);
  }
);
