<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router Basic - 01</h2>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--指定带路由路径的链接-->
          <a v-link="{path:'/about'}" class="list-group-item">About</a>
          <a v-link="{path:'/home'}" class="list-group-item">Home</a>
        </div>
      </div>

      <!--指定用来渲染当前路由组件的标签-->
      <router-view keep-alive msg="abc"></router-view>
    </div>

  </div>
</template>
<script>
  export default {
  }
</script>
<style>
</style>
