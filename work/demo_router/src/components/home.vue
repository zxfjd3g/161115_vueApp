<template>
  <div class="col-xs-6">
    <div class="panel">
      <div class="panel-body">
        <!--用于渲染匹配的组件-->
        <div>
          <h2>Home</h2>
          <div>Home route component!</div>
          <input>
          <h2>{{msg}}</h2>
        </div>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a v-link="{path:'/home/news'}">NEWS</a>
            </li>
            <li>
              <a v-link="{path:'/home/message'}">MESSAGE</a>
            </li>
          </ul>



          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['msg']
  }
</script>

<style>

</style>
