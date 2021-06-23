<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          bottom
          rounded
          small
          outlined
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          View Details
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Detail Info</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list three-line subheader class="mt-10">
          <v-subheader light style="font-size: 28px">User Details</v-subheader>
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-left">
                  Label
                </th>
                <th class="text-left">
                  Value
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                  v-for="(item, key) in formattedUser.user"
                  :key="key"
              >
                <td>{{ key }}</td>
                <td>{{ item }}</td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader class="mt-10">
          <v-subheader light style="font-size: 28px">Organization Details</v-subheader>
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-left">
                  Label
                </th>
                <th class="text-left">
                  Value
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                  v-for="(item, key) in formattedUser.organization"
                  :key="key"
              >
                <td>{{ key }}</td>
                <td>{{ item }}</td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader class="mt-10">
          <v-subheader light style="font-size: 28px">Submitted Details</v-subheader>
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-left">
                  Label
                </th>
                <th class="text-left">
                  Value
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                  v-for="(item, key) in formattedUser.submittedTickets"
                  :key="key"
              >
                <td>{{ key }}</td>
                <td>{{ item }}</td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader class="mt-10">
          <v-subheader light style="font-size: 28px">Assigned Details</v-subheader>
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-left">
                  Label
                </th>
                <th class="text-left">
                  Value
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                  v-for="(item, key) in formattedUser.assignedTickets"
                  :key="key"
              >
                <td>{{ key }}</td>
                <td>{{ item }}</td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "UserDetails",
  props: ["user"],
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      // formattedUser:{
      //   user:{},
      //   organization:{},
      //   assignedTickets:[],
      //   submittedTickets:[]
      // }
    };
  },
  computed:{
    formattedUser(){
      const rawObj = {
        user: this.$props.user,
        organization: this.$props.user.organization,
        submittedTickets: this.$props.user.submitted,
        assignedTickets: this.$props.user.assigned,
      }
      delete rawObj.user.organization;
      delete rawObj.user.submitted;
      delete rawObj.user.assigned;

      return rawObj;
    }
  },
  mounted() {
    console.log(this.$props.user);
    // console.log(this.formatData());
  },
  methods: {
    getLabel(name, replaceChar = " ") {
      return name
        ? this.lodash.startCase(this.lodash.toLower(name.replace(/[^0-9a-z]/gi, replaceChar)))
        : "";
    },
    formatData(){

      const rawObj = {
        user: this.$props.user,
        organization: this.$props.user.organization,
        submittedTickets: this.$props.user.submitted,
        assignedTickets: this.$props.user.assigned,
      }
      console.log("this.$props.user.User", this.$props.user)



      for (const dataObj in rawObj) {

        if (Object.entries(rawObj[dataObj]).length){
          for (const items in rawObj[dataObj]) {
            console.log( rawObj[dataObj][items] )
          }
        }

      }

    }
  },
};
</script>

<style scoped></style>
