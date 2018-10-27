/*
包含n个用于直接更新状态数据方法的对象
 */
import Vue from 'vue'

import {
  RECEIVE_MSITE,
  RECEIVE_FINDTHINGS,
  RECEIVE_CATEGORY
}from './mutations-types'

export default {
  [RECEIVE_MSITE] (state, {msite}) {
    state.msite = msite
  },
  [RECEIVE_FINDTHINGS] (state, {findthings}) {
    state.findthings = findthings
  },
  [RECEIVE_CATEGORY] (state, {category_data}) {
    state.category_data = category_data
  }

}
