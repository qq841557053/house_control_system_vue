import request from '@/utils/request'

export function addHouseByUser(data) {
  return request({
    url: '/putorder/user',
    method: 'post',
    data
  })
}
export function addHouseBySeller(data) {
  return request({
    url: '/putorder/seller',
    method: 'post',
    data
  })
}
export function showAllBuyHouse(data) {
  return request({
    url: '/housebuy/show',
    method: 'post',
    data
  })
}
export function showAllSellHouse(data) {
  return request({
    url: '/housesell/show',
    method: 'post',
    data
  })
}
export function sellHouse(param) {
  return request({
    url: '/housebuy/get',
    method: 'get',
    params: { sell_id: param.sell_id, sell_order: param.sell_order }
  })
}
export function buyHouse(param) {
  return request({
    url: '/housesell/get',
    method: 'get',
    params: { buy_id: param.buy_id, buy_order: param.buy_order }
  })
}
