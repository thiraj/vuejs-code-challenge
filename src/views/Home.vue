<template>
  <v-main style="padding: 20px">
    <SearchBar @userSelected="addToList" />
    <UserItemCard :users-list="usersList" @removeUser="removeFromList" />
  </v-main>
</template>

<script>
import SearchBar from "../components/SearchBar";
import UserItemCard from "../components/UserItemCard";
export default {
  name: "Home",
  components: {
    UserItemCard,
    SearchBar,
  },
  data: () => ({
    usersList: [],
  }),
  methods: {
    addToList(user) {
      this.usersList.push(user);
    },
    removeFromList(userIndex) {
      this.usersList.splice(userIndex, 1);
    },
  },
};
</script>
