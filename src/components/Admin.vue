<template>
  <div class="container">
    <div class="col-sm-12 col-md-8 float-left">
      <!-- new pizza -->
      <app-new-pizza></app-new-pizza>
    </div>
    <div class="col-sm-12 col-md-4 float-right">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import NewPizza from './NewPizza.vue'
  export default{
    data(){
      return{}
    },
    components:{
      'app-new-pizza':NewPizza
    },
    computed:{
      getMenuItems:{
        get(){
          return this.$store.getters.getMenuItems
        },
        set(){

        }
      }
    },
    created(){
      this.$axios.get('/addPizza')
      .then(res =>{
        this.$store.commit('setMenuItems',res.data)
      })
    },
    methods:{
      deleteData(item){
        this.$axios.delete('addPizza/'+item.id)
        .then(data => {
          this.$store.commit('removeMenuItems',item)
        })
      }
    }
  }

</script>


