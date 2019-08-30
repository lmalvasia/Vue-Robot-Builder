<!-- Template section -->
<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <img class="logo" src="./assets/build-a-bot-logo.png" alt="logo.png" />
            Build a bot
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <RobotBuilder />
    </main>
  </div>
</template>


<!-- Script section -->
<script>
// import HomePage from './home/HomePage.vue';
import RobotBuilder from './build/robotBuilder.vue';

export default {
  name: 'app',
  components: {
    // HomePage,
    RobotBuilder,
  },
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
</style>
