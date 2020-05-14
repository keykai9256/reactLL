import request from '../utils/request'

export function getOrderById() {
  return request({
    url: '?r=index/index-banner',
    method: 'get'
  })
}