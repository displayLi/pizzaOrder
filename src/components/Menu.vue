<template>
  <div class="container">
    <!-- 菜单 -->
    <div class="col-sm-12 col-md-8 float-left">
      <table class="table">
        <thead class="thead-default">
          <h2 class="text-muted my-5">菜单</h2>
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems">
          <tr>
            <td><strong>{{item.name}}</strong></td>
          </tr>
          <tr v-for="option in item.options">
            <td>{{option.size}}</td>
            <td>{{option.price}}</td>
            <td>
              <button 
                @click="addToBasket(item,option)"
                class="btn btn-sm btn-outline-success">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 购物车 -->
    <div class="col-sm-12 col-md-4 float-left">
      <div v-if="baskets.length > 0 ">
          <table class="table">
              <thead class="thead-default">
                <h2 class="text-muted my-5">购物车</h2>
                <tr>
                  <th>数量</th>
                  <th>品种</th>
                  <th>价格</th>
                </tr>
              </thead>
              <tbody v-for="item in baskets">
                <tr>
                  <td>
                    <button @click="decreaseQuantity(item)" class="btn btn-sm">-</button>
                    <span>{{item.quantity}}</span>
                    <button @click="increaseQuantity(item)" class="btn btn-sm">+</button>
                  </td>
                  <td>{{item.name}}{{item.size}}</td>
                  <td>{{item.price * item.quantity}}</td>
                </tr>
              </tbody>
            </table>
            <p>总价: {{total + "RMB"}}</p>
            <button @click="successed()" class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else class="text-muted my-5">
        {{basketText}}
      </div>
      
    </div>

  </div>
</template>
<script>
  export default{
    data(){
      return{
        baskets:[],
        basketText:"购物车没有任何商品",
      }
    },
    computed:{
      getMenuItems(){
        return this.$store.getters.getMenuItems
      },
      total(){
        let totalCost = 0

        for(let index in this.baskets){
          let individualItem = this.baskets[index]
          totalCost += individualItem.quantity * individualItem.price
        }

        return totalCost
      }
    },
    created(){
      this.fetchData()
    },
    methods:{
      successed(){
        alert('点餐成功');
        this.baskets.splice(0);
      },
      fetchData(){
        this.$axios.get("addPizza")
            .then(res => this.$store.commit("setMenuItems",res.data))
      },
      addToBasket(item,option){
        let basket = {
          name:item.name,
          size:option.size,
          price:option.price,
          quantity:1
        }

        if(this.baskets.length > 0){
          // 过滤
          let result = this.baskets.filter( (basket) => {
            return (basket.name === item.name && basket.price === option.price)
          })
          
          if(result != null && result.length > 0){
            result[0].quantity++
          }else{
            this.baskets.push(basket)
          }
        }else{
          this.baskets.push(basket)
        }
      },
      decreaseQuantity(item){
        item.quantity--
        if(item.quantity <= 0){
          this.removeFromBasket(item)
        }
      },
      increaseQuantity(item){
        item.quantity++
      },
      removeFromBasket(item){
        this.baskets.splice(this.baskets.indexOf(item),1)
      }
    }
  }
</script>