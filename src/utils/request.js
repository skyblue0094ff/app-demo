import axios from 'axios'
import { getToken } from '@/utils/auth'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.baseURL,
  timeout: 5000
})

service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['X-Token'] = getToken()
  }
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  const res = response.data
  if (res.code !== 20000) {
    alert(res.message || 'Error')
  }
  if (res.code === 50008 || res.code === 50012 || res.code === 5014) {
    alert('You have been logged out, you can cancel to stay on this page, or log in again')
    // 点击登出，则登出
    // store.dispath('user/resetToken').then(() => {
    //   location.reload()
    // })
    return Promise.reject(new Error(res.message))
  } else {
    return res
  }
}, error => {
  console.log('err:' + error)
  alert(error.message)
  return Promise.reject(error)
})

export default service
