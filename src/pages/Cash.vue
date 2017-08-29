<template>
  <div class="cash">
    <div>123</div>
    <a @click="currentView = 'home'">home</a>
    <a @click="currentView = 'test'">test2</a>
    <component :is="currentView"></component>
  </div>
</template>

<script>
  import ArkClient from '@/arkengine/ArkClient'
  import Test2 from '@/components/Test2'
  import Hello from '@/components/Hello'
  export default {
    name: 'cash',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        currentView: 'test'
      }
    },
    components: {
      test: Test2,
      home: Hello
    },
    created () {
      const client = new ArkClient()
      const client2 = new ArkClient()
      client2.opts.host = 'http://000000'
      console.log(client.opts, client2.opts)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
