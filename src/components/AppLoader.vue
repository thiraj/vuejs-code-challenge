<template>
  <div class="text-center">
    <v-overlay :value="isLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AppLoader",
  computed: {
    ...mapGetters({
      isLoading: "App/getIsLoading",
    }),
  },
};
</script>

<style scoped></style>
