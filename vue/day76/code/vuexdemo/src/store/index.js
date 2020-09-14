import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
    //  state 就相当于 data  存放数据的
    state: {
        count: 0
    },

    //  mutations 就相当于 methods  存放的方法
    mutations: {
        add(state, num) {
            state.count++
            // state.count=state.count+num
        }
    }
})

export default store