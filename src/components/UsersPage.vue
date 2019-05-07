<template>
  <v-container>
    <v-layout wrap>
      <v-flex
        v-for="(user, i) of getUsers"
        :key="i" 
        offset-sm2
      >
        <card-page
          class="ma-1 pa-1" 
          :user="user"
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

  data: () => ({
  }),

  computed: {
    getUsers() {
      //console.log(this.$store.state.users);
      return this.$store.state.users;
    }
  }
};
</script>

<style>
</style>
