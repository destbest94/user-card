<template>
  <v-container>
    <v-layout 
      wrap
      v-for="(user, i) of users"
      :key="i"   
    >
      <v-flex
        offset-sm2
      >
        <card-page
          class="ma-1 pa-1" 
          :id="i"
        ></card-page>
      </v-flex>
      
    </v-layout>
  </v-container>
</template>

<script>
import CardPage from './CardPage'

export default {
  components: {
    CardPage
  },

  data(){
    return {
      users: this.$store.state.users
    }
  },

  methods: {
  },

  computed: {
    getUsers() {
      return this.$store.state.users;
    }
  }
};
</script>

<style>
</style>
