import { SearchService } from "../../../services/SearchService";

const searchService = new SearchService();

const Search = {
  namespaced: true,
  state: {
    organizations: [],
    tickets: [],
    users: [],
    searchFields: [],
    filteredUsers: [],
  },
  mutations: {
    setSearchFields(state, field) {
      state.searchFields.push(field);
    },
    setFilteredUsers(state, users) {
      state.filteredUsers = users;
    },
  },
  actions: {
    initSearchFields({ commit }) {
      return new Promise((resolve, reject) => {
        searchService
          .getSearchFields()
          .then(async (response) => {
            if (Object.entries(response).length) {
              for await (let [key] of Object.entries(response)) {
                commit("setSearchFields", key);
              }
            }
            resolve();
          })
          .catch(() => {
            reject();
          });
      });
    },
    searchUsers({ commit }, filterParams) {
      const { searchKey, searchValue } = filterParams;
      searchService
          .filterUsers(searchKey, searchValue)
          .then((response) => {
            commit("setFilteredUsers", response);
          })
    },
  },
  getters: {
    getSelected(state) {
      return state;
    },
    getSearchFields(state) {
      return state.searchFields;
    },
    getFilteredUsers(state) {
      return state.filteredUsers;
    },
  },
};
export default Search;
