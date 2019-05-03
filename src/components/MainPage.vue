<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12 justify-center>
        <v-text-field label="Users count" v-model="count"></v-text-field>
        <v-btn @click="setCount()">Generate</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    count: 0,
  }),
  methods: {
    setCount() {
      this.$store.state.count = this.count;
      this.$router.push('/users');
    }
  }
};
</script>

<style>
</style>
