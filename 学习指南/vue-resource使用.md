## vue-resource插件使用
* 说明:
  * vue-resource是非官方提供的ajax插件, 受众广
  * github: https://github.com/pagekit/vue-resource
  * vue官方开始推荐使用axios作为ajax库
  * 下载: npm install vue-resource --save
* 基本使用编码
  ```
  //引入模块
  import VueResource from 'vue-resource'
  //使用插件
  Vue.use(VueResource)
 
  //通过vue组件对象发送ajax请求
  this.$http.get('/someUrl').then((response) => {
    // success callback
    console.log(response.body) //返回结果数据
  }, (response) => {
    // error callback
    console.log(response.statusText) //错误信息
  });
  ```
* 详细用法(查看在线文档)
  ```
  https://github.com/pagekit/vue-resource/blob/develop/docs/http.md
  ```
  
* 使用axios发送ajax请求
  * axios在线文档: https://github.com/mzabriskie/axios
  * 下载axios: npm install axios --save
  * 使用:
    ```
    import axios from 'axios'
    axios.get(url)
      .then((response) => {
        console.log(response)
      })
    ```
  * 测试接口: https://api.github.com/users/octocat/gists
