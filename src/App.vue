<template>
  <div id="app">
    <h1>Main v7</h1>
    <button @click="addToHomeScreen">Install</button>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
export default {
  name: 'App',
  components: {
  },
  methods: {
      addToHomeScreen () {
          if (this.deferredPrompt) {
            this.deferredPrompt.prompt()
            this.deferredPrompt.userChoice.then((choiceResult) => {
              if (choiceResult.outcome === 'accepted') {
                  console.log('User accepted the A2HS prompt');
              } else {
                console.log('User dismissed the A2HS prompt');
                }
              });
          }
      }
  },
  mounted () {
    console.debug("App.mounted() > ")
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        this.deferredPrompt = e;
        console.debug("App.mounted() > beforeinstallprompt", this.deferredPrompt)
    })
  }
}
</script>

