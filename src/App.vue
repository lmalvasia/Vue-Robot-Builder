<!-- Template section -->
<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link active-class="activePage" class="nav-link" :to="{name: 'Home'}" exact>
              <!-- Podemos usar el nombre de la ruta para movernos -->
              <!-- Por defecto, el router usa como active class router-link-active.  -->
              <!-- Podemos cambiarlo usando active-class. -->
              <img class="logo" src="./assets/build-a-bot-logo.png" alt="logo.png" />
              Build a bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="activePage" class="nav-link" :to="{name: 'Build'}" exact>
              Build
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>


<!-- Script section -->
<script>
export default {
  name: 'app',
};
</script>


<!-- Style section -->
<style>
body {
  background-color: #CCC;
}
</style>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}
main {
  display: flex;
  justify-content: center;
  background-color: #FFF;
  padding: 30px 0px;
  width: 70%;
}
header {
  display: flex;
  width: 70%;
  background-color: #999;
  margin-bottom: 20px;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active { /* router link toma por defecto esto */
  color:white;
}
.activePage { /* es posible cambiarlo */
  color:white;
}
</style>
