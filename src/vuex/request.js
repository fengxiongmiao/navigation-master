import Vue from 'Vue';
import axios from 'axios'

const isAddProject = false;
const isLocal = true;
const proxyPrefix ='/test';//项目名
const port = '6060';

export const dataUrl = 'http://'+(isLocal? 'localhost:':'www.xinmove.com')+port+(isAddProject?proxyPrefix:'');

// 如果是本地调试（url中带有 localhost 或者 ip地址 ）自动加上 /eventsMuseum/ ，否则 （线上地址，生产地址） 加上 /
export const testDataUrl =
  window.location.host.search(/(localhost|\d+\.\d+\.\d+\.\d+)/g) !== -1
    ? proxyPrefix
    : '/';

axios.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么，例如加入token
  // if (window.localStorage.getItem('token')) {
  //   config.headers.token = window.localStorage.getItem(
  //     'token'
  //   )
  // }
  return config
});

axios.interceptors.response.use(function(res) {
  // if (res.data.token) {
  //   window.localStorage.setItem('token', res.data.token)
  // }
  // 在接收响应做些什么，例如跳转到登录页
  return res
});

// 非父子组件之间通信
export const bus = new Vue();

// 获取头部信息
export const headInfo = (option, callback) => {
  requestFormat(option, callback, 'get', dataUrl + '/test/getHeadInfo')
};
// 获取测试数据信息
export const testInfo = (option, callback) => {
  requestFormat(option, callback, 'get', dataUrl + '/test/getInfo')
};

//主页数据
export const getCardsByGroup = (option, callback) => {
  requestFormat(option, callback, 'get', dataUrl + '/test/getCardsByGroup?gids=2&gids=3')
};


// 请求格式化
export const requestFormat = (option, callback, method, url) => {
  if (typeof option === 'function') {
    url = method;
    method = callback;
    callback = option;
    option = {}
  }
  axios({
    url,
    method,
    ...option
  })
    .then(res => {
      callback(res)
    })
    .catch(res => {
      console.error(res.message)
    })
};



