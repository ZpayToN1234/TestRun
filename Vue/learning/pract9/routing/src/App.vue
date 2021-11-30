<template>
  <div id="nav">
    <router-link :to="{name:'Home'}">Home</router-link> |
    <router-link :to="{name:'About'}">About</router-link>|
    <router-link :to="{name:'Jobs'}"> Jobs </router-link> 
  </div>
  <router-view/>
</template> 

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color:#d6c473;
  display:sticky; 
  height: 3px;
}

#nav a {
  font-weight: bold;
  color:white;
 padding:5px 10px;
  

}

#nav a.router-link-exact-active {
  color:white;
  padding: 2px 5px;

}

#nav a:hover{
  background-color:red;
}
</style>
