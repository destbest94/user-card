<template>
  <v-layout justify-center>
    <!-- <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-layout>
          <v-flex xs4>
            <v-avatar size="100px">
              <v-img src="https://randomuser.me/api/portraits/women/72.jpg"></v-img>
            </v-avatar>
          </v-flex>
          <v-layout>
            <h4>User 1</h4>
            <v-text-field></v-text-field>
          </v-layout>
        </v-layout>

        <v-card-actions>
          <v-btn round outline color="red">
            <font color="#c1c1ba">Delete</font>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn round outline color="blue">
            <font color="#c1c1ba">Edit</font>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex> -->
    <v-flex xs12 sm6>
      <v-card>
        <v-layout class="pa-1">
          <v-flex xs4>
            <v-avatar size="150px">
              <v-img
                src="https://randomuser.me/api/portraits/women/72.jpg"
              ></v-img>
            </v-avatar>
          </v-flex>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div>Full name</div>
                <div>Email</div>
                <div>Phone</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider light></v-divider>
        <v-card-actions class="pa-3">
          <v-btn round outline color="red"><font color="#c1c1ba">Delete</font></v-btn>
          <v-spacer></v-spacer>
          <v-btn round outline color="blue"><font color="#c1c1ba">Edit</font></v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>


  </v-layout>
</template>

<script>
export default {};
</script>
