<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/register">Register</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header nav ul {
  list-style-type: none;
  padding: 0;
}

header nav ul li {
  display: inline;
  margin-right: 10px;
}

router-link {
  text-decoration: none;
  color: #42b983;
}

router-link:hover {
  text-decoration: underline;
}
</style>