<template>
	<div class="main">
    <v-app-bar dark color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>{{ this.$route.name }}</v-toolbar-title>
      <v-spacer/>
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            @click="signout()"
          >
            <v-list-item-title>Sign out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <router-view/>

		<v-bottom-navigation
    color="primary"
    grow
    app
  >
    <v-btn to="home">
      <!-- <span>Home</span> -->
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn to="todo">
      <!-- <span>Todo</span> -->
      <v-icon>mdi-format-list-bulleted-square</v-icon>
    </v-btn>
    <v-btn to="calendar">
      <!-- <span>Calendar</span> -->
      <v-icon>mdi-calendar</v-icon>
    </v-btn>
  </v-bottom-navigation>
	</div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    
  },
  methods:{
    signout(){
      this.$store.dispatch('signout');
    }
  },
  data:()=>({
  }),
}
</script>
