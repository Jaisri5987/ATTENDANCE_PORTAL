<template>
  <div id="app">
    <HeaderComponent v-if="$route.path!='/' &&  $route.path!='/simulator'"/>
    <router-view/>
  </div>
</template>

<script>
 import HeaderComponent from './components/HeaderComponent.vue'
// import LoginComponent from './components/LoginComponent.vue'

export default {
  name: 'App',
  components: {
     HeaderComponent,
   //  LoginComponent
  }
}
</script>

<style>
#app{
  min-height:100vh;
}
</style>
