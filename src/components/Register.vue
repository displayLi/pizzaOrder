<template>
  <div class=" mt-3 margins">
      <div class="col-md-12 col-lg-12 text-center">
          <div class="card-body">
            <form class="form-signin">
              <h1 class="h3 mb-3 font-weight-normal">Please Register</h1>
              <label for="inputEmail" class="sr-only">Email address</label>
              <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="email">
              <label class="sr-only">Password</label>
              <input type="text" class="form-control" placeholder="Password" v-model="password">
              <label class="sr-only">Password</label>
              <input type="text" class="form-control" placeholder="Password" v-model="confirmPassword">
              <label class="sr-only">Password</label>
              <input type="tel" class="form-control" placeholder="phone" v-model="phone">
              <div class="checkbox mb-3">
                <label></label>
              </div>
              <button @click.prevent="onSubmit()" class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
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
        password:'',
        confirmPassword:'',
        phone:''  
      }
    },
    methods:{
      onSubmit(){
        if(this.password === this.confirmPassword){
          const formData = {
            email:this.email,
            password:this.password,
            confirmPassword:this.confirmPassword,
            phone:this.phone
          }

          this.$axios.post('/users',formData)
               .then(res => this.$router.push({name:'loginLink'}))

        }else{
          alert("两次密码不一致!")
        }
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
