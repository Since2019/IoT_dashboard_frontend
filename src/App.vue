<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <h1>Smart Home IoT</h1>
      <router-view />

      <!-- TODO: center the bottom navbar -->
      <div id="nav-bottom">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <router-link to="/test">TEST</router-link>
      </div>
    </div>
  </a-locale-provider>
</template>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav-bottom {
  position: fixed;
  bottom: 0;
  padding: 30px;
}

#nav-bottom a {
  font-weight: bold;
  color: #2c3e50;
}

#nav-bottom a.router-link-exact-active {
  color: #42b983;
}
</style>
