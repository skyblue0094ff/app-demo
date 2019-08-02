<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition :name="transitionName" :mode='transitionMode'>
       <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      transitionName: 'left',
      transitionMode: 'out-in'
    }
  },
  watch: {
    '$route' (to, from) {
      const routeDeep = ['/', '/home', '/about', '/ceshi']
      const toDepth = routeDeep.indexOf(to.path)
      const fromDepth = routeDeep.indexOf(from.path)
      this.transitionName = toDepth > fromDepth ? 'left' : 'right'
      // this.transitionMode = toDepth > fromDepth ? 'out-in' : 'in-out'
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolut;
  top: 0;
  left:0;
  right: 0;
  bottom: 0;
  background-color: red;
  #nav {
  // padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}

</style>
