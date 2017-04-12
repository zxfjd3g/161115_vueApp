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
      <hello tt='abc'>
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
