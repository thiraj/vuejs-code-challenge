import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";
import User from "./../models/User";
import Organization from "./../models/Organization";
import Ticket from "./../models/Ticket";
import Search from "./modules/search/search";
import App from "./modules/app/app";

Vue.use(Vuex);

// Creating database instance
const database = new VuexORM.Database();

// Registering models
database.register(User);
database.register(Organization);
database.register(Ticket);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    App,
    Search,
  },
  plugins: [VuexORM.install(database)],
});
