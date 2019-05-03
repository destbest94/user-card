<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <h1>{{ getCount }}</h1>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
  }),

  computed: {
    getCount() {
      return this.$store.state.count;
    }
  }
};
</script>

<style>
</style>
