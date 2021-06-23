const App = {
  namespaced: true,
  state: {
    showLoader: false,
  },
  mutations: {
    setShowLoader(state, value) {
      state.showLoader = value;
    },
  },
  actions: {
    setIsLoading({ commit }, value) {
      commit("setShowLoader", value);
    },
  },
  getters: {
    getIsLoading(state) {
      return state.showLoader;
    },
  },
};
export default App;
