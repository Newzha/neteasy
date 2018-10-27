/*
包含n个用于间接更新状态数据方法的对象
 */
import {
  reqMSite,
  reqFindThings,
  reqCategory

} from '../api'

import {
  RECEIVE_MSITE,
  RECEIVE_FINDTHINGS,
  RECEIVE_CATEGORY

} from './mutations-types'

export default {
  // 异步获取msite
  async getMSite ({commit}, cb) {
    // 发送ajax请求
    const result = await reqMSite()
    if(result.code===0){
      const msite = result.data
      // commit给mutation
      commit(RECEIVE_MSITE, {msite})
      console.log('{msite}')
      // 在更新状态后立即调用
      cb && cb()
    }
  },
  // 异步获取findthings
  async getFindThings ({commit}, cb) {
    // 发送ajax请求
    const result = await reqFindThings()
    if(result.code===0){
      const findthings = result.data
      // commit给mutation
      commit(RECEIVE_FINDTHINGS, {findthings})
      // 在更新状态后立即调用
      cb && cb()
    }
  },
  // 异步获取category
  async getCategory ({commit}, cb) {
    // 发送ajax请求
    const result = await reqCategory()
    if(result.code===0){
      const category_data = result.data
      // commit给mutation
      commit(RECEIVE_CATEGORY, {category_data})
      // 在更新状态后立即调用
      cb && cb()
    }
  }



}
