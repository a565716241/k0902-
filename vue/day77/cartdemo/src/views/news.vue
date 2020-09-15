<template>
  <div>
    <h2>news---------{{msg}} {{$store.state.msg}}  ----{{count}}</h2>

    <h3>{{$store.getters.changeMsg}} ---{{changeMsg}}</h3>

    <ul>
      <li v-for="(item,index) in $store.state.list" :key="index">{{item}}</li>
    </ul>
    <button @click="sendMutions">点击触发mutations</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions,mapMutations } from "vuex";
export default {
  name: "",
  data() {
    return {
      newList: [],
    };
  },

  created() {
    // this.$store.dispatch("getHome", { id: 10 });
    this.getHome();
  },
  mounted() {
    console.log(this.list);
  },
  methods: {
      
sendMutions(){
    // $store.commit('add')
 this.add()
},
    ...mapActions(["getHome"]),

    ...mapMutations(['add'])
  },
  computed: {
    ...mapState(["list", "msg",'count']),

    ...mapGetters(["changeMsg"]),
  },
};
</script>

<style scoped>
</style>