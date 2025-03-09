// 该文件用于创建 Vuex 中最为核心的 store
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'

Vue.use(Vuex)

// 准备 actions 用于相应组件中的动作
const actions = {}
// 准备 mutations 用于修改 state（数据）
const mutations = {}
// 准备 state 用于存储数据
const state = {}

// 创建并暴露 store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
