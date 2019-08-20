import request from '../utils/request';

//商品列表
export function fetchList(params) {
  return request({
    url:'/product/list',
    method:'get',
    params:params
  })
}

//商品分类
export function fetchListaction(params) {
  return request({
    url: 'productCategory/list/0?pageNum=1&pageSize=5',
    method: 'get',
    params: params
  })
}

//商品类型
export function fetchTypeaction(params) {
  return request({
    url: 'productAttribute/category/list',
    method: 'get',
    params: params
  })
}

// export function updateDeleteStatus(params) {
//   return request({
//     url:'/product/update/deleteStatus',
//     method:'post',
//     params:params
//   })
// }

// export function updateNewStatus(params) {
//   return request({
//     url:'/product/update/newStatus',
//     method:'post',
//     params:params
//   })
// }

// export function updateRecommendStatus(params) {
//   return request({
//     url:'/product/update/recommendStatus',
//     method:'post',
//     params:params
//   })
// }

// export function updatePublishStatus(params) {
//   return request({
//     url:'/product/update/publishStatus',
//     method:'post',
//     params:params
//   })
// }

// export function createProduct(data) {
//   return request({
//     url:'/product/create',
//     method:'post',
//     data:data
//   })
// }

// export function updateProduct(id,data) {
//   return request({
//     url:'/product/update/'+id,
//     method:'post',
//     data:data
//   })
// }

// export function getProduct(id) {
//   return request({
//     url:'/product/updateInfo/'+id,
//     method:'get',
//   })
// }

