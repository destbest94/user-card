<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <card-page></card-page>
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
    getCount() {
      return this.$store.state.count;
    },
    
    getUsers() {
      console.log(this.$store.state.users);
      return this.$store.state.users;
    }
  }
};
</script>

<style>
</style>
