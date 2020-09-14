import Vue from 'vue'
import  Vuex  from 'vuex'
  

Vue.use(Vuex)





//写法一
//   export default new Vuex.Store({
//         state:{}
//     })


//写法二

const state={
    count:1
}


const   mutations={
    incCount(state){
          // state.count=state.count+1;
          state.count++;
      

        

    },

    reduceCount(){
        state.count--;
        
    }
}




const actions={
    //第一参数是上下文 默认就有(包含mutations,state.getters)  第个参数是传递参数
    incMutationsCoun(context){

      setTimeout(()=>{
        context.commit('incCount')

      },2000)
    }

}


//跟computed 用法一模一样
const getters ={
    computedCount(state){
        return  state.count*100;

    }


}


const store=new Vuex.Store({
    // state:state,
//    mutations:mutations

state,
mutations,

// actions:actions
actions,
getters




})


export  default  store


