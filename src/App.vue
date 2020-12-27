<template>
  <v-app>
    <router-view></router-view>
    <v-snackbar
      v-model="this.$store.getters.snackbar.show"
    >
      {{ this.$store.getters.snackbar.message }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="primary"
          text
          v-bind="attrs"
          @click="$store.commit('closeSnackbar')"
        >
          CLOSE
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>

</style>