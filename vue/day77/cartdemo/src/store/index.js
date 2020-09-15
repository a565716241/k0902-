// 首页：https://global.sunlands.com/frontend/web/index.php?r=home-page/h5-home
// 	列表：https://global.sunlands.com/frontend/web/index.php?r=university/search&area=&sort=0&page=1&pageSize=5
// 	详情：https://global.sunlands.com/frontend/web/index.php?r=university/h5-info&id=2

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)



const state = {
    list: [],
    detail: {},
    title: '',
    msg: '',
    count:0


}

const mutations = {
    getList(state, payload) {
        console.log(payload)
        state.list = payload.mylist,
            state.msg = payload.msg

    },

    add(state) {
        state .count++
    }


}
const actions = {
    //组件来调用
    getHome(context, acdata) {
        // console.log(acdata)  //{id:10}
        // alert(1)
        axios.get('https://global.sunlands.com/frontend/web/index.php?r=home-page/h5-home').then(res => {
            // console.log(res.data)
            let { newList, msg } = res.data;
            // console.log(newList)
            context.commit('getList', { mylist: newList, msg })
        })



    }

}
const getters = {
      
    
    changeMsg(state) {
        return   state.msg+' 我是getters 的新增的内容'
    }

}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters

})

export default store

