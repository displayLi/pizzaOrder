<template>
  <div>
    <div id="home" class="col-sm-12">
      <div class="background text-center">
        <h2>欢迎光临Pizza点餐系统</h2>
        <h2>Hello  Pizza  System</h2>
        <button @click="goToMenu" class="btn btn-success">Let's order!</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    methods:{
      goToMenu(){
        this.$router.push({name:'menuLink'})
      }
    }
  }
</script>

<style scoped>
#home{
  background: url('../../src/assets/banner.jpg') center center no-repeat;
  background-size: cover;
  width: 100vw;
  height: 95vh;
  padding: 0;
}

h2{
  color: #fff;
  padding:6px;
}

.background{
  background-color:rgba(0,0,0,.8);
  width: 100%;
  height: 100%;
  padding-top:200px; 
  animation: tops 2.5s;
}
button {
  margin: 10px;
}

@keyframes tops {
  0%{
    padding-top: 0px;
    opacity: 0;
  }
  100%{
    padding-top: 200px;
    opacity: 1;
  }
}
</style>
