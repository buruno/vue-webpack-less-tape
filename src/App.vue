<template>
  <div id="app">
    <img src="./assets/img/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
// Global styles imported here (or inside the global .less file)
@import './assets/styles/main.less';
</style>
