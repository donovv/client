<template>
  <div class="navi" v-if="!this.$store.state.isMobile">
    <div class="nav-item logo" v-on:click="this.$router.push('/')">Dono702</div>
    <div class="nav-item menu"><Menu/></div>
    <div class="nav-item login"
      v-if="!this.$store.state.user"
      v-on:click.stop="this.$store.commit('toggleLoginWindow')">
        Login
    </div>
      <div class="nav-item login" v-else>{{ user.username }}</div>
  </div>
  <div class="navi" v-else>
    <div class="nav-item-mobile menu-button" v-on:click="openMobileMenu">
      <img src="../assets/menu-icon.svg">
    </div>
    <div class="nav-item-mobile logo">Dono702</div>
    <div class="nav-item-mobile login"
      v-if="!this.$store.state.user"
      v-on:click.stop="this.$store.commit('toggleLoginWindow')">
        login
    </div>
    <div v-else>{{ user.username }}</div>
    <Menu/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Menu from './menu.vue';

export default {
  name: 'Navigation',
  components: {
    Menu,
  },
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  computed: {
    ...mapState({ user: 'user' }),
  },
  methods: {
    openMobileMenu() {
      if (this.mobileMenuOpen) document.getElementsByClassName('menu-mobile')[0].classList.remove('open');
      else document.getElementsByClassName('menu-mobile')[0].classList.add('open');
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
};
</script>

<style scoped>
.navi {
  height: 3rem;
  width: calc(100% - 5px);
  border-radius: 5px;
  border: 1px solid white;
  display: flex;
  align-items: center;
}
.logo {
  display: flex;
  justify-self: flex-start;
  margin-left: 1rem;
  cursor: pointer;
  font-size: 1.3rem;
  padding: 0 .5rem 0 .4rem;
  font-style: oblique;
  font-weight: 500;
  user-select: none;
}
.menu {
  margin-left: .1rem;
}
.login {
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
  margin-left: auto;
  cursor: pointer;
  user-select: none;
}
.nav-item {
  background-color: #3c5064;
  height: 80%;
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 75px;
}
.menu-button {
  align-items: center;
  display: flex;
  margin-left: 1rem;
}

.menu-button img {
  object-fit: contain;
  height: 25px;
}
.nav-item-mobile {
  width: 33%;
  user-select: none;
}
</style>
