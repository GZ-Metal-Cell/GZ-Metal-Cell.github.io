<template>
    <div>
        <h1>当前求和为：{{ $store.state.sum }}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
    name: 'Count',
    data() {
        return {
            n: 1,  // 用户选择的数字
        }
    },
    methods: {
        increment() {
            this.$store.commit('ADD', this.n)
        },
        decrement() {
            this.$store.commit('MINUS', this.n)
        },
        incrementOdd() {
            this.$store.dispatch('addOdd', this.n)
        },
        incrementWait() {
            this.$store.dispatch('addWait', this.n)
        }
    }
}
</script>
