/*
vuex 的 mutations 模块
*/
import {
  RECEIVE_CATEGORYS,
} from './mutation-types'
export default {
  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },
}
