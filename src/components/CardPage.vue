<template>
  <v-container v-if="isDeleted">
    <v-card max-width="650">
      <v-container fluid class="pa-1">
        <v-layout>
          <div class="pa-2 mt-4"> 
            <v-avatar size="150px">
              <v-img
                :src="info.imageSrc"
              ></v-img>
            </v-avatar>
          </div>
          
          <v-flex>
            <v-card-text class="text-sm-left pa-2">
              <v-text-field label="Full name" v-model="info.fullName" :readonly="isChange"></v-text-field>
              <v-text-field label="Email" v-model="info.email" :readonly="isChange"></v-text-field>
              <v-text-field label="Phone" v-model="info.phone" :readonly="isChange"></v-text-field>
            </v-card-text>
          </v-flex>
        </v-layout>

        <v-divider light></v-divider>
        
        <v-card-actions class="pa-3">
          <v-btn round outline color="red" @click="isChange?deleteUser():cancel()"><font color="#c1c1ba">{{ isChange?"Delete":"Cancel" }}</font></v-btn>
          <v-spacer></v-spacer>
          <v-btn round outline color="blue" @click="isChange?change():save()"><font color="#c1c1ba">{{ isChange?"Edit":"Save" }}</font></v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: [
    'user'
  ],
  data() {
    return {
      info: {
        fullName: this.user.name.first + " " + this.user.name.last,
        email: this.user.email,
        phone: this.user.phone,
        imageSrc: this.user.picture.large,
      },
      oldInfo: null,
      isChange: true,
      isDeleted: true
    }
  },
  methods: {
    change() {
      this.isChange = !this.isChange;
      this.oldInfo = Object.assign({}, this.info);
    },

    save() {
      this.isChange = !this.isChange;
    },
    
    cancel() {
      this.info = this.oldInfo;
      this.isChange = !this.isChange;
    },

    deleteUser() {
      this.isDeleted = !this.isDeleted;
    }
  }
};
</script>
