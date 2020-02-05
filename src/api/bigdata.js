import request from '@/utils/request'

export function pickBuy(order) {
  return request({
    url: '/bigdata/pickbuy',
    method: 'get',
    params: { order }
  })
}
export function pickSell(order) {
  return request({
    url: '/bigdata/picksell',
    method: 'get',
    params: { order }
  })
}
export function getNowData() {
  return request({
    url: '/bigdata/getdata',
    method: 'get'
  })
}
