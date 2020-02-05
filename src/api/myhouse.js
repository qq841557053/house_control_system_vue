import request from '@/utils/request'
export function showUserBuyHouse(data) {
  return request({
    url: '/me/user/get',
    method: 'post',
    data
  })
}
export function showSellerSellHouse(data) {
  return request({
    url: '/me/seller/get',
    method: 'post',
    data
  })
}
export function closeUserBuyHouse(order) {
    return request({
      url: '/me/seller/close',
      method: 'get',
      params: {
        order
      }
    })
  }
export function closeSellerSellHouse(order) {
  return request({
    url: '/me/user/close',
    method: 'get',
    params: {
      order
    }
  })
}

