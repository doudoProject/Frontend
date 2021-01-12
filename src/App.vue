<template>
  <v-app>
    <router-view></router-view>
    <v-snackbar
      v-model="$store.getters.snackbar.show"
    >
      {{ $store.getters.snackbar.message }}

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
  created() { this.$socket.on('chat', (data)=> { console.log( data.message) }) },
};
</script>

<style>

</style>