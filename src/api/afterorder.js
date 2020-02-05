import request from '@/utils/request'

export function addAfterOrder(data) {
  return request({
    url: '/afterorder/put',
    method: 'post',
    data
  })
}
export function showAfterOrder(data) {
  return request({
    url: '/afterorder/show',
    method: 'post',
    data
  })
}
export function changeAfterOrder(order, statue) {
  return request({
    url: '/afterorder/changed',
    method: 'get',
    params: {
      order, statue
    }
  })
}
