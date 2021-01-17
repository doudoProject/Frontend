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
          닫기
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  sockets:{
    reconnect(){
      if(this.$store.getters.user.accessToken)
       this.$socket.emit('userconnect',this.$store.getters.user)
    }
  },
  data: () => ({
    //
  }),
};
</script>

<style>

</style>