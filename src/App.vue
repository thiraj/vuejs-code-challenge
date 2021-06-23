<template>
  <v-app>
    <AppLoader />
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { SearchService } from "./services/SearchService";
import NavBar from "./components/NavBar";
import AppLoader from "./components/AppLoader";
export default {
  name: "App",
  components: { AppLoader, NavBar },
  created() {
    new SearchService().initDataStore();
  },
};
</script>
