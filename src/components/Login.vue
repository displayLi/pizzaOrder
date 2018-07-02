<template>
  <div class=" mt-3 margins">
    <div class="col-md-12 col-lg-12 text-center">
        <div class="card-body">
          <form class="form-signin">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="email">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password">
            <div class="checkbox mb-3">
              <label></label>
            </div>
            <button @click.prevent="onSubmit()" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-muted">&copy; LINK+创意工作室   2017-2018</p>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        email:'',
        password:''
      }
    },
    // 组件内的守卫
    beforeRouteEnter: (to, from, next) => {
      next(vm => vm.$store.dispatch("setUser",null))
    },
    methods:{
      onSubmit(){
        this.$axios.get('/users')
             .then(res => {
              const data = res.data
              const users = []
              for(let key in data){
                const user = data[key]
                users.push(user)
              }

              // 实现过滤
              let result = users.filter((user) => {
                return user.email === this.email && user.password === this.password
              })

              if(result != null && result.length > 0){
                this.$store.dispatch("setUser",result[0].email)
                this.$router.push({name:"homeLink"})
              }else{
                alert("账号或密码错误!")
                this.$store.dispatch("setUser",null)
              }
             })
      }
    }
  }

</script>

<style scoped>
  form{
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 50px auto;
  }
</style>
