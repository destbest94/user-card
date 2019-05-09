<template>
  <v-form v-model="valid">
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
              <v-text-field
                label="Full name"
                v-model="info.fullName"
                :rules="[rules.required]"
                :readonly="isChange"
              ></v-text-field>
              
              <v-text-field
                
                label="Email"
                v-model="info.email"
                :rules="[rules.required, rules.email]"
                :readonly="isChange"
              ></v-text-field>
              
              <v-text-field
                label="Phone"
                v-model="info.phone"
                :rules="[rules.required]"
                :readonly="isChange"
              ></v-text-field>
            </v-card-text>
          </v-flex>
        </v-layout>

        <v-divider light></v-divider>
        
        <v-card-actions class="pa-3">
          <v-btn
            round
            outline
            color="red"
            @click="isChange?onDelete():onCancel()"
          >
            <font color="#c1c1ba">
              {{ isChange?"Delete":"Cancel" }}
            </font>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            round
            outline
            color="blue"
            :disabled="!valid"
            @click="isChange?onEdit():onSave()"
          >
            <font color="#c1c1ba">
              {{ isChange?"Edit":"Save" }}
            </font>
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-form>
</template>

<script>

export default {
  props: [
    'id'
  ],
  data() {
    return {
      valid: false,
      oldInfo: this.$store.state.users[this.id],
      info: {
        fullName: this.$store.state.users[this.id].name.first
          + " " + this.$store.state.users[this.id].name.last,
        email: this.$store.state.users[this.id].email,
        phone: this.$store.state.users[this.id].phone,
        imageSrc: this.$store.state.users[this.id].picture.large
      },
      rules: {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      },
      isChange: true,
      isDeleted: true
    }
  },
  methods: {
    onEdit() {
      this.isChange = !this.isChange;
    },

    onSave() {
      this.isChange = !this.isChange;
      let name = this.info.fullName.split(' ');
      this.oldInfo.name.first = name.splice(0, 1);
      this.oldInfo.name.last = name;
      this.oldInfo.email = this.info.email;
      this.oldInfo.phone = this.info.phone;
      this.oldInfo.picture.large = this.info.imageSrc;
    },
    
    onCancel() {
      this.isChange = !this.isChange;
      this.info.fullName = this.oldInfo.name.first + " " + this.oldInfo.name.last;
      this.info.email = this.oldInfo.email;
      this.info.phone = this.oldInfo.phone;
      this.info.imageSrc = this.oldInfo.picture.large;
    },

    onDelete() {
      console.log(this.$store.state.users[this.id]);
      this.$store.state.users.splice(this.id, 1);
    }
  }
};
</script>
