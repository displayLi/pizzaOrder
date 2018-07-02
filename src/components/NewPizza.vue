<template>
  <form class="my-5">
    <h3 class="text-muted my-5">添加新的Pizza</h3>
    <div class="form-group row">
      <label class="col-sm-2">品种</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="newPizza.name">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2">描述</label>
      <div class="col-sm-10">
        <textarea rows="5" class="form-control" v-model="newPizza.description"></textarea>
      </div>
    </div>
    <p><strong>选项1</strong></p>
    <div class="form-group row">
      <label class="col-sm-2">尺寸</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="newPizza.size1">
      </div>
    </div>
     <div class="form-group row">
      <label class="col-sm-2">价格</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="newPizza.price1">
      </div>
    </div>

    <p><strong>选项2</strong></p>
    <div class="form-group row">
      <label class="col-sm-2">尺寸</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="newPizza.size2">
      </div>
    </div>
     <div class="form-group row">
      <label class="col-sm-2">价格</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="newPizza.price2">
      </div>
    </div>
    <div class="ml-auto">
      <button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>
    </div>
</form>
</template>
<script>
  export default{
    data(){
      return{
        newPizza:{}
      }
    },
    methods:{
      addMenuItem(){
        if (this.newPizza.name && this.newPizza.description && this.newPizza.size1 && this.newPizza.size2 && this.newPizza.price1 && this.newPizza.price2) {
          let data = {
          name:this.newPizza.name,
          description:this.newPizza.description,
          options:[
            {
              size:this.newPizza.size1,
              price:this.newPizza.price1
            },
            {
              size:this.newPizza.size2,
              price:this.newPizza.price2
            }
          ]
        }
        // 数据同步到vuex中
        this.$axios.post("addPizza",data)
            .then(res => this.$store.commit("pushToMenuItems",data))
        }else {
          alert('请输入要添加的数据');
        }
      }
    }
  }
</script>
<style scoped>
  .btn-p{
    margin: 0 -15px;
  }
</style>
