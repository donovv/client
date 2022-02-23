<template>
  <div class="menu" v-if="!this.$store.state.isMobile">
    <div class="menu-item" v-on:click="this.$router.push('/blog')">BLOG</div>
    <div class="menu-item" v-on:click="this.$router.push('/projects')">PROJECTS</div>
    <div class="menu-item" v-on:click="this.$router.push('/about')">ABOUT ME</div>
  </div>
  <div class="menu-mobile" v-else>
    <div class="menu-item-mobile" v-on:click="this.$router.push('/blog')">BLOG</div>
    <div class="menu-item-mobile" v-on:click="this.$router.push('/projects')">PROJECTS</div>
    <div class="menu-item-mobile" v-on:click="this.$router.push('/about')">ABOUT ME</div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<style scoped>
.menu {
  display: flex;
  height:90%
}
.menu-item {
  display: flex;
  align-items: center;
  padding: 0 .2rem 0 .2rem;
  margin: 0 .1rem 0 .1rem;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
}
.menu-mobile {
  position: absolute;
  top: 3.1rem;
  left: -5px;
  background: #526f8b;
  height: calc(100vh - 4.7rem);
  width: 0%;
  max-width: 250px;
  z-index: 10;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
  color: black;
  transition: width 2s;
}
.menu-item-mobile {
  background: #3f5972;
  height: 3rem;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  width: calc(100%-10px);
  padding-left: 10px;
  border: 1px solid black;
  border-radius: 5px;
}
.open {
  width: 50%;
}
.close {
  width:0%;
};
</style>
