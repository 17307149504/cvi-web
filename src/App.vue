<template>
  <div id="app">
    <my-nav></my-nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import nav from './components/common/nav'
export default {
  name: 'App',
  components: {
    "my-nav": nav,
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ddd;
  // background-color: #eee;
  min-height: 400px;
}
.container {
  width: 80%;
  margin: 0 auto;
  // background-color: #fff;
  min-height: 400px;
}
.el-breadcrumb{
  margin: 20px 0;
  padding: 20px 10px;
  background-color: #fff;
}
h3 {
    text-align: left;
}
h3::before {
  content: '';
  border: 10px solid transparent;
  border-left: 10px solid pink;
}
.input-box {
  background-color: #fff;
  padding: 10px 10px 20px;
  margin: 20px 0;
}
.result-box {
  background-color: #fff;
  padding: 10px 10px 20px;
  margin: 20px 0;
}
.submit-btn {
  margin-top: 40px;
  width: 200px;
}
</style>
