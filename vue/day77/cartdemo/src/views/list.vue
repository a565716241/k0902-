<template>
  <div>
    <h1>我是购物车</h1>
    <div>
      <label for>课程名称:</label>
      <input type="text" v-model="couseInfo.couseName"/>

      <label for>课程价格:</label>
      <input type="text" v-model="couseInfo.cousePrice"/>

      <button @click="addList">点击添加商品</button>
    </div>
    <h2>课程列表</h2>
    <table>
      <tr>
        <th>课程名称</th>
        <th>课程价格</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item,index) in list" :key="index">
        <td>{{item.couseName}}</td>
        <td>{{item.cousePrice}}</td>
        <td>
          <button @click="addToCart(item.id,index)">添加到购物车</button>
        </td>
      </tr>
    </table>

    <Cart :itemlist="itemlist " @removeItem="remove"></Cart>
  </div>
</template>

<script>
import Cart from "./cart";
export default {
  name: "",
  data() {
    return {
      itemlist: [],

      myid: 3,
      couseInfo: {
        couseName: "",
        cousePrice: "",
      },
      list: [
        {
          id: 1,
          couseName: "Python人工智能",
          cousePrice: 25000,
        },
        {
          id: 2,
          couseName: "前端",
          cousePrice: 20000,
        },
        {
          id: 3,
          couseName: "java",
          cousePrice: 15000,
        },
      ],
    };
  },
  methods: {
    addList() {
      let { couseName, cousePrice } = this.couseInfo;

      if (!couseName.trim()) {
        alert("课程名称不能为空");
        return false;
      }

      if (Number(cousePrice.trim()) < 0) {
        alert("商品的价格不能为负数");
        return false;
      }

      let idObj = { id: ++this.myid };
      let newcouseInfo = JSON.parse(
        JSON.stringify({ ...this.couseInfo, ...idObj })
      ); // 这个是一个深拷贝
      // console.log(newcouseInfo)
      this.list.push(newcouseInfo);
      this.couseInfo.couseName = "";
      this.couseInfo.cousePrice = "";
    },

    addToCart(id, index) {
      //先判断一下之前购物车里面有没有该商品 如果有那么就是数量 加+1  如果没有就是整个商品加入购物车
      //   var hasId=this.itemlist.some(v=>v.id===id);
      var currentItem = this.list[index];

      let hasCousse = this.itemlist.find((v) => v.id === id);

      if (!hasCousse) {
        this.itemlist.push({ ...currentItem, isActive: true, number: 1 });
      } else {
        hasCousse.number += 1;
      }

      console.log(this.itemlist);
    },

    //删除功能
    remove(index) {
      this.itemlist.splice(index, 1);
    },
  },
  components: {
    Cart,
  },
};
</script>

<style scoped>
table {
  margin: 0 auto;
}
</style>