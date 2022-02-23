import { createStore } from 'vuex';

export default createStore({
  state: {
    isMobile: false,
    currentWidth: 'desktop',
    loginVisible: false,
    user: null,
  },
  mutations: {
    setMobile: (state) => { state.isMobile = true; state.currentWidth = 'mobile'; },
    setDesktop: (state) => { state.isMobile = false; state.currentWidth = 'desktop'; },
    toggleLoginWindow: (state) => { state.loginVisible = !state.loginVisible; },
  },
  actions: {
  },
  modules: {
  },
});
