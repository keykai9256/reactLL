import axios from 'axios'
import {Toast} from 'antd-mobile'
//创建axios实例
const service = axios.create({
    baseURL: process.env.REACT_APP_API, // api的base_url
    timeout: 200000, // 请求超时时间
    withCredentials: true // 选项表明了是否是跨域请求
  })
  service.interceptors.request.use(config => {
    Toast.loading('加载中',1)              // loading组件，显示文字加载中，自动关闭延时1s
    console.log('request go');
    console.log('process.env.BASE_API',process.env.REACT_APP_API)
    return config;
  }, err => {
    console.log('请求失败')
    return Promise.reject(err)
  })
  //拦截响应
  service.interceptors.response.use(config => {
    Toast.hide()                             // 销毁Toast组件
    console.log('response get')
    return config;
  }, err => {
    console.log('响应失败')
    return Promise.reject(err)
  })
  
  // respone拦截器
  service.interceptors.response.use(
    response => {
      /**
      * code为非000000是抛错 可结合自己业务进行修改
      */
      const res = response.data
      if (res.code !== '000000') {
        console.log("response",res)
        res.code = res.data.code
         res.message = res.response.data.msg
        Toast.info(res.code+res.message, 2);
        return Promise.reject('error')
      } else {
        return response.data
      }
    },
    error => {
      return Promise.reject(error)
    }
  )
  export default service