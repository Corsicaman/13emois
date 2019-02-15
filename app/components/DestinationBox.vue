<template>
  <div class="destinationBox">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>


<script>
export default {
  name: 'destinationBox',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.destinationBox {
  background-color: orange;
}
</style>