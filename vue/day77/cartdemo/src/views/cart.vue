<template>
  <div>
    <h2>我是购物车</h2>

    <table>
      <tr>
        <th>勾选</th>
        <th>课程名称</th>
        <th>课程价格</th>
        <th>数量</th>
        <th>总价格</th>
      </tr>

      <tr v-for="(item,index) in itemlist" :key="item.id"  :class="{'active': item.isActive}">
        <td>
          <input type="checkbox" name id v-model="item.isActive" />
        </td>
        <td>{{item.couseName}}</td>
        <td>{{item.cousePrice}}</td>
        <td>
          <button @click="addNum(item)">+</button>
          {{item.number}}
          <!-- <input type="text" v-model="item.number"  v-bind:value="item.number"> -->
          <button @click="reduceNum(item,index)">-</button>
        </td>
        <td>{{item.number*item.cousePrice}}</td>
      </tr>

      <tr v-if="allLength">
        <td></td>
        <td colspan="2">商品选中 :{{checkNum }} /{{allLength}}</td>
        <td colspan="2">总价格： {{allPrice}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["itemlist"],
  name: "",
  data() {
    return {};
  },
  methods: {
    addNum(item) {
      item.number += 1;
    },
    reduceNum(item, index) {
      if (item.number == 1) {
        var flag = window.confirm("是否要删除");
        if (flag) {
        
          this.$emit('removeItem',index) // 子组件不要动父组件传递过来的值
        } else {
          return false;
        }
      }
      item.number-=1;
    },
  },
  computed: {
    checkNum() {
      return this.itemlist.filter((v) => v.isActive).length;
    },
    allLength() {
      return this.itemlist.length;
    },

    // item.number*item.cousePrice}
    allPrice() {
      var add = 0;
      this.itemlist.filter((v) => {
        if (v.isActive) {
          add += v.number * v.cousePrice;
        }
      });

      return add;
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0 auto;
}
table {
  margin: 0 auto;
}

.active {
  background-color: pink;
}
</style>