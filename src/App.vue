<template>
  <Navigation />
  <Login v-if="this.$store.state.loginVisible"/>
  <router-view/>
  <Footer/>
</template>
<script>
import Navigation from './components/navigation.vue';
import Login from './components/login.vue';
import Footer from './components/footer.vue';

export default {
  components: {
    Navigation,
    Login,
    Footer,
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },

  methods: {
    onResize() {
      if (window.innerWidth < 500 && this.$store.state.currentWidth === 'desktop') { this.$store.commit('setMobile'); this.currentWidth = 'mobile'; }
      if (window.innerWidth > 500 && this.$store.state.currentWidth === 'mobile') { this.$store.commit('setDesktop'); this.currentWidth = 'desktop'; }
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2c3e50;
  color: white;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
body {
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  overflow:hidden;
}
</style>
