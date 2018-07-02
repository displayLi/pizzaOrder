<template>
  <div id="app">
    <div>
      <app-header></app-header>
    </div>
    <div>
      <router-view></router-view>
    </div>
    <br>
    <div class="container">
      <div>
        <div class="col-sm-12 col-md-4 float-left">
          <router-view name="orderingGuide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4 float-left">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4 float-left">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  components:{
    "app-header":Header
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>
