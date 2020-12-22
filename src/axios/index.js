import axios from 'axios';

axios.defaults.baseURL = '/api'; // 跨域请求域名
// 处理请求头部
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.withCredentials = true;// 允许跨域携带cookie
const qs = require('qs'); // qs.parse()将URL解析成对象的形式

if (process.env.NODE_ENV === 'development') {
  // 本地
  axios.defaults.baseURL = 'api/';
} else {
  // 线上
  axios.defaults.baseURL = '//xyadmin.cqshoppingmall.com/';
}


// 接口错误提示
export const timeout = (error) => {
  if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
    return false;
  }
  console.log(error);
  return false;
};

//
export function test(url, fn) {
  let data = qs.stringify({ url });
  axios.post('/index/test', data).then((response) => {
    fn(response.data);
  }).catch((error) => {
    timeout(error)
  });
}

//
export const test2 = (url, fn) => {
  let data = qs.stringify({ url });
  axios.post('/index/test2', data).then((response) => {
    fn(response.data);
  }).catch((error) => {
    timeout(error)
  });
};

