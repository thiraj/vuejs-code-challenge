<template>
  <v-container>
    <v-row class="justify-start ml-8 mb-5 mt-12">
      <v-toolbar-title class="font-weight-light" style="font-size: 28px"
        >Search Users:</v-toolbar-title
      >
    </v-row>
    <v-row>
      <v-col cols="12" md="5" class="pr-10 pl-10">
        <v-autocomplete
          v-model="filters.key"
          :items="searchFields"
          label="Search By"
        >
        </v-autocomplete>
      </v-col>

      <v-col cols="12" md="5" class="pr-10 pl-10">
        <v-autocomplete
          v-model="selectedItem"
          :item-text="filters.key"
          :items="filteredResult"
          :search-input.sync="filters.value"
          label="Search Value"
          return-object
          :disabled="filters.key.length < 1"
        ></v-autocomplete>
      </v-col>

      <v-col cols="12" md="2">
        <v-btn
          bottom
          rounded
          style="vertical-align: bottom"
          @click="addToList"
          :disabled="Object.entries(selectedItem).length < 1"
        >
          Add to List
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SearchBar",
  computed: {
    ...mapGetters({
      searchFields: "Search/getSearchFields",
      filteredResult: "Search/getFilteredUsers",
    }),
  },
  data: () => ({
    filters: {
      key: "",
      value: "",
    },
    filtered: [],
    selectedItem: {},
    selectedItemList: [],
  }),
  created() {
    this.setLoader(true);
    this.initSearchFields().then(() => {
      this.setLoader(false);
    });
  },
  methods: {
    ...mapActions({
      initSearchFields: "Search/initSearchFields",
      searchUsers: "Search/searchUsers",
      setLoader: "App/setIsLoading",
    }),
    filterUsers() {
      this.searchUsers({
        searchKey: this.filters.key,
        searchValue: this.filters.value,
      });
    },
    addToList() {
      this.$emit("userSelected", this.selectedItem);
      this.selectedItem = {};
    },
  },
  watch: {
    "filters.key": function () {
      this.filters.value = "";
      this.selectedItem = {};
      this.filterUsers();
    },
    "filters.value": function () {
      this.filterUsers();
    },
  },
};
</script>

<style scoped></style>
