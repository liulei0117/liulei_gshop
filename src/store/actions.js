/*
vuex 的 actions 模块
*/
import {
  RECEIVE_CATEGORYS,
} from './mutation-types'
import {
  reqFoodCategorys,
} from '../api'

export default {
// 异步获取分类列表
  async getCategorys({commit}) {
    const result = await reqFoodCategorys();
    commit(RECEIVE_CATEGORYS, {categorys: result.data})
  }
}
