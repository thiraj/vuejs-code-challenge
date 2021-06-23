<template>
  <v-container>
    <v-row class="mt-10 justify-center">
      <v-toolbar-title class="font-weight-thin" style="font-size: 34px">
        Users List
      </v-toolbar-title>
    </v-row>
    <v-row class="mt-5">
      <v-col cols="12" md="2" v-for="(user, index) in usersList" :key="index">
        <v-card class="mx-auto" outlined elevation="5">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h6 mb-1">
                {{ user.name }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-spacer></v-spacer>

          <v-card-actions class="pb-5 pl-5 pr-5">
            <v-btn
              bottom
              rounded
              color="red"
              small
              outlined
              @click="removeUserItem(index)"
            >
              Remove
            </v-btn>
            <v-spacer></v-spacer>
            <UserDetails :user="user" />
          </v-card-actions>
          <v-spacer></v-spacer>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-if="usersList.length < 1" class="mt-5 justify-center">
      <label class="mt-10 font-weight-light" style="font-size: 18px"
        >No users in your list</label
      >
    </v-row>
  </v-container>
</template>

<script>
import UserDetails from "./UserDetail";
export default {
  name: "UserDetailCard",
  components: { UserDetails },
  props: ["usersList"],
  methods: {
    removeUserItem(index) {
      this.$emit("removeUser", index);
    },
  },
};
</script>

<style scoped></style>
