import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout(token) {
  return request({
    url: '/user/logout',
    method: 'get',
    params: { token }
  })
}

export function getAllUser() {
  return request({
    url: '/user/show',
    method: 'get'
  })
}

export function updataUser(data) {
  return request({
    url: '/user/update',
    method: 'post',
    data
  })
}

export function deleteUser(uuid) {
  return request({
    url: '/user/delete',
    method: 'get',
    params: { uuid }
  })
}

export function addUser(data) {
  return request({
    url: '/user/add',
    method: 'post',
    data
  })
}

