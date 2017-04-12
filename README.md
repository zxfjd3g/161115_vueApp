## 主要包含以下主题
* **vue-cli插件使用**
* **vue组件化开发**
* **vue-reource插件使用**
* **vue-router插件使用**
* 关于ESLint工具

## vue-cli插件使用
* 说明:
  * vue-cli是vue官方提供的脚手架工具包
  * github: https://github.com/vuejs/vue-cli

* 使用vue-cli快速创建工程化项目
  * 使用基于webpack的简单模板创建项目: webpack-simple_demo
    ```
    npm install -g vue-cli    //下载脚手架包
    vue init webpack-simple webpack-simple_demo   //下载模板
    vue init webpack-simple#1.0 webpack-simple_demo   //下载模板
    cd webpack-simple_demo
    cyarn/npm install
    npm run dev
    访问: http://localhost:8080/
    ```
  * 使用基于webpack的完整模板创建项目: webpack_demo
    ```
    vue init webpack#1.0 webpack_demo
    cd webpack_demo
    cyarn/npm install
    npm run dev
    访问: http://localhost:8080/
    ```
* 模板项目的结构
  ```
  |-- build : webpack相关的配置文件夹(基本不需要修改)
    |-- dev-server.js : 通过express启动后台服务器
  |-- config: webpack相关的配置文件夹(基本不需要修改)
    |-- index.js: 指定的后台服务的端口号和静态资源文件夹
  |-- node_modules
  |-- src : 源码文件夹
    |-- components: vue组件及其相关资源文件夹
      |-- app.vue: 应用根主组件
    |-- main.js: 应用入口js
  |-- static: 静态资源文件夹
  |-- .babelrc: babel的配置文件
  |-- .editorconfig: 通过编辑器的编码/格式进行一定的配置
  |-- .eslintignore: eslint检查忽略的配置
  |-- .eslintrc.js: eslint检查的配置
  |-- .gitignore: git版本管制忽略的配置
  |-- index.html: 主页面文件
  |-- package.json: 应用包配置文件 
  |-- README.md: 应用描述说明的readme文件
  ```

* 编码测试与打包发布项目
  * 编码测试:
    * npm run dev
    * 访问: http://localhost:8080
    * 编码, 自动编译打包(HMR), 查看效果
  * 打包发布
    * npm run build
    * npm install -g pushstate-server
    * pushstate-server dist
    * 访问: http://localhost:9000

## vue组件化开发
* vue组件的定义与使用
  * 一个.vue文件就是一个vue组件
  * 组成(3个部分)
    * 模板页面: 
      ```
      <template>
        页面模板
      </template>
      ```
    * JS默认模块对象: 
      ```
      <script>
        export default {
          data() {return {}},
          methods: {},
          computed: {},
          components: {}
        }
      </script>
      ```
    * 页面样式: 
      ```
      <style scoped>  //scoped代表样式只针对当前组件的模板页面
        样式定义
      </style>
      ```
  * 基本使用
    在父组件对象的components属性中配置子组件(将组件映射成标签)
    ```
    <template>
      <hello>
    </template>
    <script>
      import Hello from './components/Hello'
      export default {
        components: {
          Hello
        }
      }
    </script>
    ```
  * 关于标签名与标签属性名书写问题:
    * 标签名与标签属性名不区分大小写
    * 标签名: 如果组件名是XxxYyy, 标签名必须为<xxx-yyy>
    * 属性名: 如果标签属性名为xxx-yyy, 组件得到的属性名为: xxxYyy
  
* 组件化编码的基本流程
  * 拆分界面, 抽取组件
  * 编写静态组件, 并使用
  * 编写动态组件, 并使用
    * 初始化数据, 动态显示初始化界面
    * 响应用户操作
    
* 组件间通信
  * 组件通信的2种方式
    * props
    * vue的自定义事件机制
  * 基本原则: 不要在子组件中直接修改父组件的状态数据
  * 使用props
    * 组件标签: <my-component name='tom' :age='myAge' :set-name='setName'></my-component>
    * 组件: MyComponent
      * 在组件内声明所有的props
        ```
        //方式一: 只指定名称
        props: ['name', 'age', 'setName']
        //方式二: 指定名称和类型
        props: {
          name: String,
          age: Number,
          setNmae: Function
        }
        //方式三: 指定名称/类型/必要性/默认值
        props: {
          name: {type: String, required: true, default:xxx},
        }
        ```
      * 所有props的属性都会成为component对象的属性, 模板页面可以直接引用
  * 使用vue的自定义事件机制
    * 绑定事件监听
      * 方式一: 通过$on()
        ```
        this.$on('delete_todo', function (todo) {
          this.deleteTodo(todo)
        })
        ```
      * 方式二: 通过events选项
        ```
        events: {
          'delete_todo': function (todo) {
            this.deleteTodo(todo)
          }
        },
        ```
      * 方式三: 通过v-on绑定
        ```
        @delete_todo="deleteTodo"
        ```
    * 触发事件(3种情况)
      ```
      this.$emit(eventName, data): 在当前组件触发事件
      this.$dispatch(eventName, data): 分给父辈组件(冒泡)
      this.$broadcast(eventName, data): 广播给后代组件
      ```

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
    
## vue-router插件使用
* 说明
  * 官方提供的用来实现SPA的插件
  * github: https://github.com/vuejs/vue-router
  * 对应vue1.x的版本为: 0.7.13
* 下载和引入
  ```
  npm install vue-router@0.7.13 --save
  import VueRouter from 'vue-router'
 
  ```
* 相关API说明
  * VueRouter(): 构建函数, 用来创建路由器对象
    * 配置: 在创建对象时可以指定一个配置对象
      ```
      new VueRouter({
        linkActiveClass: 'active', //指定当前路由链接的样式名
        history: true //去掉#!
      })
     
      ```
    * map(): 映射路由
      ```
      router.map({
          '/about': {
            component: About
          },
          '/home': {
            component: Home
          }
        })
      
      ```
    * start(): 启动应用
      ```
      router.start(App, '#app')
     
      ```
    * go(): 请求指定路由
      ```
      router.go('/about')
     
      ```
  * 指令与组件:
    * v-link: 用来指定路由路径
      ```
      <a v-link='{path:"/about"}'>About</a>
      ```
    * <router-view>: 用来显示当前路由组件界面
      ```
      <router-view></router-view>
      ```
* 实现简单路由
  * 路由组件:
    * home.vue
    * about.vue
  * 应用组件: App.vue
    ```
    <div>
      <!--路由链接-->
      <a v-link="{path:'/about'}">About</a>
      <a v-link="{path:'/home'}">Home</a>
      <!--用于渲染当前路由组件-->
      <router-view keep-alive></router-view>  
    </div>
   
    ```
  * 入口js: main.js
    ```
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    import app from './components/app.vue'
    
    //使用插件
    Vue.use(VueRouter)
    
    //创建用来映射路由的路由器对象
    const router = new VueRouter({
      linkActiveClass: 'active', //指定当前路由链接的样式名
      history: true //去掉#!
    })
    
    //配置路由
    router.map({
      '/about': {component: about},
      '/home': {component: home}
    })
    
    //启动应用
    router.start(app, '#app')
    
    //初始请求一个路由
    router.go('/about')
  
    ```
* 实现嵌套路由
  * 配置嵌套路由
    ```
    subRoutes: {
      '/news': {
        component: news
      }
    }
   
    ```
  * 路由路径
    ```
    <a v-link="{path: '/home/news'}">News</a>
   
    ```
* 路由请求携带参数
  * 配置路由
    ```
    subRoutes: {
      '/mdetail/:id': {
        component: messageDetail
      }
    }
    
    ```
  * 路由路径
    ```
    <a v-link="{path: '/home/message/mdetail/2'}">{{m.title}}</a>
   
    ```
  * 路由组件中读取请求参数
    ```
    {{$route.params.id}}
    
    ```
* <route-view>使用
  * 参数keep-alive属性实现路由界面的缓存
  * 通过标签属性可动态向路由组件内部传递数据
    ```
    <router-view keep-alive :msg="msg"></router-view>
    
    ```

## 关于ESLint
* 说明
  * ESLint是一个代码规范检查工具
  * 官网: http://eslint.org/
  * 基本已替代以前的JSLint
* ESLint提供以下支持
	* ES6
	* AngularJS
	* JSX
	* Style检查
	* 自定义错误和提示
* ESLint提供以下几种校验
	* 语法错误校验
  * 不重要或丢失的标点符号，如分号
  * 没法运行到的代码块（使用过WebStorm的童鞋应该了解）
	* 未被使用的参数提醒
  * 漏掉的结束符，如}
  * 确保样式的统一规则，如sass或者less
	* 检查变量的命名
* 规则的错误等级有三种
	* 0：关闭规则。
  * 1：打开规则，并且作为一个警告（不影响exit code）。
	* 2：打开规则，并且作为一个错误（exit code将会是1）。
* 相关配置文件
  * .eslintrc.js : 规则相关配置文件, 可以在此修改规则
	* 在js/vue文件中指定
    ```
    /* eslint-disable no-new */
    new Vue({
      el: 'body',
      components: { App }
    })
    ```
	* .eslintignore: 指令检查忽略的文件,　可以在此添加想忽略的文件
    ```
    *.js
    *.vue
    ```