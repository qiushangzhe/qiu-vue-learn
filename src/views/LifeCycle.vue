<template>
  <div>
    <h1>vue生命周期,打开控制台查看</h1>
    <p>
      <a href="https://segmentfault.com/a/1190000008010666">参考文章</a>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'life-cycle',
    data: () => {
      return {
        data_before_create: {
          title: 'beforeCreate 创建前状态',
          el: {},
          data: {},
          message: ''
        },
        data_created: {
          title: 'created 创建完毕状态',
          el: {},
          data: {},
          message: ''
        },
        data_before_mount: {
          title: 'beforeMount 挂载前状态',
          el: {},
          data: {},
          message: ''
        },
        data_mounted: {
          title: 'mounted 挂载结束状态',
          el: {},
          data: {},
          message: ''
        },
        data_before_update: {
          title: 'beforeUpdate 更新前状态',
          el: {},
          data: {},
          message: ''
        },
        data_updated: {
          title: 'updated 更新完成状态',
          el: {},
          data: {},
          message: ''
        },
        data_before_destroy: {
          title: 'beforeDestroy 销毁前状态',
          el: {},
          data: {},
          message: ''
        },
        data_destroyed: {
          title: 'destroyed 销毁完成状态',
          el: {},
          data: {},
          message: ''
        }
      }
    },
    beforeCreate: function () {
      // this.data_before_create.el = this.$el;
      // this.data_before_create.data = this.$data;
      // this.data_before_create.message = this.message;
      console.group('beforeCreate 创建前状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el) // undefined
      console.log('%c%s', 'color:green', 'data   : ' + JSON.stringify(this.$data)) // 已被初始化
      console.log('%c%s', 'color:red', 'message: ' + this.message) //
    },
    created: function () {
      console.group('created 创建完毕状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el) // undefined
      console.log('%c%s', 'color:green', 'data   : ' + JSON.stringify(this.$data)) // 已被初始化
      console.log('%c%s', 'color:red', 'message: ' + this.message) // 已被初始化
    },
    beforeMount: function () {
      console.group('beforeMount 挂载前状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + (this.$el)) // 已被初始化
      console.log(this.$el)
      console.log('%c%s', 'color:green', 'data   : ' + JSON.stringify(this.$data)) // 已被初始化
      console.log('%c%s', 'color:red', 'message: ' + this.message) // 已被初始化
    },
    mounted: function () {
      console.group('mounted 挂载结束状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el) // 已被初始化
      console.log(this.$el)
      console.log('%c%s', 'color:green', 'data   : ' + JSON.stringify(this.$data)) // 已被初始化
      console.log('%c%s', 'color:red', 'message: ' + this.message) // 已被初始化
    },
    beforeUpdate: function () {
      console.group('beforeUpdate 更新前状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el)
      console.log(this.$el)
      console.log('%c%s', 'color:green', 'data   : ' + JSON.stringify(this.$data))
      console.log('%c%s', 'color:red', 'message: ' + this.message)
    },
    updated: function () {
      console.group('updated 更新完成状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el)
      console.log(this.$el)
      console.log('%c%s', 'color:green', 'data   : ' + JSON.stringify(this.$data))
      console.log('%c%s', 'color:red', 'message: ' + this.message)
    },
    beforeDestroy: function () {
      console.group('beforeDestroy 销毁前状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el)
      console.log(this.$el)
      console.log('%c%s', 'color:green', 'data   : ' + JSON.stringify(this.$data))
      console.log('%c%s', 'color:red', 'message: ' + this.message)
    },
    destroyed: function () {
      console.group('destroyed 销毁完成状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el)
      console.log(this.$el)
      console.log('%c%s', 'color:green', 'data   : ' + JSON.stringify(this.$data))
      console.log('%c%s', 'color:red', 'message: ' + this.message)
    }
  }
</script>

<style scoped>

</style>
