<template>
	<div class="main">
    <v-app-bar dark color="primary">
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title>두두 베타</v-toolbar-title>
      <v-spacer/>
      
          <v-btn
            icon
            @click="refreshTodo()"
          >
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
      <v-menu
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
            <v-list-item-icon>
              <v-icon>mdi-power-plug-off</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              Sign out
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            @click="refreshUser()"
          >
            <v-list-item-icon>
              <v-icon>mdi-refresh</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              Refresh UserData
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            @click="refreshTodo()"
          >
            <v-list-item-icon>
              <v-icon>mdi-refresh</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              Refresh Todo
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- <v-navigation-drawer
      v-model="drawer"
      absolute
      prominent
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Doudo
          </v-list-item-title>
          <v-list-item-subtitle>
            두두 베타
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in drawerMenu"
          :key="item.name"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-main>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
      
    </v-main>
    <v-btn class="fab-chat" fab fixed right bottom color="primary"><v-icon>mdi-chat</v-icon></v-btn>
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
    },
    refreshUser(){
      this.$store.dispatch('fetchUser');
    },
    refreshTodo(){
      this.$store.dispatch('fetchTodo');
    }
  },
  data:()=>({
    drawer:false,
    drawerMenu:[
      {icon:'mdi-home',name:'홈',to:'/home'},
      {icon:'mdi-format-list-bulleted-square',name:'Todo',to:'/todo'},
      {icon:'mdi-calendar',name:'이벤트',to:'/calendar'},
    ]
  }),
}
</script>


<style>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.12s ease;
}

.fade-leave {}

.fade-leave-active {
  transition: opacity 0.12s ease;
  opacity: 0;
}

.fab-chat{
  right:12px !important;
  bottom:68px !important;
}

</style>