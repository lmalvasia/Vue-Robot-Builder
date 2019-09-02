<template>
  <div class="wrapper">
    <h1>Browse Parts</h1>
    <ul class="menu">
      <li><router-link :to="{name: 'BrowseHeads'}">Heads</router-link></li>
      <li><router-link :to="{name: 'BrowseArms'}">Arms</router-link></li>
      <li><router-link :to="{name: 'BrowseTorsos'}">Torsos</router-link></li>
      <li><router-link :to="{name: 'BrowseBases'}">Bases</router-link></li>
    </ul>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'BrowseParts',
};
</script>

<style scoped>
  .wrapper {
    width: 100%;
  }
  h1 {
    text-align: center;
  }
  .menu {
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    padding: 0;
  }
  ul {
    list-style-type: none;
  }
  a {
    color: palevioletred;
  }
  .router-view {
    padding: 20px;
  }
</style>
