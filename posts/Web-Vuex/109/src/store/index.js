// 该文件用于创建 Vuex 中最为核心的 store
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'

Vue.use(Vuex)

// 准备 actions 用于相应组件中的动作
const actions = {
    addOdd(context, value) {
        console.log('actions addOdd', value)
        if(state.sum % 2 === 1) {
            context.commit('ADD_ODD', value)
        }
    },
    addWait(context, value) {
        console.log('actions addWait', value)
        setTimeout(() => {
            context.commit('ADD', value)
        }, 500)
    }
}
// 准备 mutations 用于修改 state（数据）
const mutations = { 
    ADD_ODD(state, value) {
        // 这里可以做一些异步操作，比如发送请求，修改本地数据等
        // 这里只是简单地修改 state 中的 sum 字段
        console.log('mutations ADD_ODD', value)
        state.sum += value
    },
    ADD(state, value) {
        console.log('mutations ADD', value)
        state.sum += value
    },
    MINUS(state, value) {
        console.log('mutations MINUS', value)
        state.sum -= value
    }
}
// 准备 state 用于存储数据
const state = {
    sum: 0
}

// 创建并暴露 store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
