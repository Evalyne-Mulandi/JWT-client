<template>
<main class=" overflow-hidden">
  <NavVue/>
  <router-view/>
</main>
</template>
 <script>
 import NavVue from './components/Nav.vue';
 export default {
  components:{
    NavVue
  }
 }
 </script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #f0f8f5;
}
</style>
