<template>
  <div class="login" id="login">
    <label for="username">Username: <br>
      <input type="text" name="username" id="username" autofocus>
    </label>
    <label for="password">Password: <br>
      <input type="text" name="password" id="password">
    </label>
    <button type="submit">Login</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  created() {
    this.$nextTick(() => {
      document.addEventListener('keydown', this.closeWindow);
      document.addEventListener('click', this.test);
    });
  },

  beforeUnmount() {
    document.removeEventListener('keydown', this.closeWindow);
    document.removeEventListener('click', this.test);
  },
  methods: {
    closeWindow(e) { if (e.key === 'Escape') this.$store.commit('toggleLoginWindow'); },
    test(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      const el = document.getElementById('login');
      if (e.composedPath().indexOf(el) === -1) this.$store.commit('toggleLoginWindow');
    },
  },
};
</script>

<style scoped>
.login {
  position: absolute;
  background-color: #192836;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  top: 50%;
  left: 50%;
  width: 50%;
  max-width: 200px;
  padding: 1rem;
  border: 2px solid white;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  box-shadow: 2px 2px 4px #888888;
}
label {
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: .5rem;
}
button {
  display: flex;
  align-self: flex-end;
  margin: 1rem;
  font-size: 1.2rem;
  border-radius: 5px;
  color: white;
  background-color: #3f5264;
  box-shadow: 2px 2px 4px #888888;
}
</style>
