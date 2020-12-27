<template>
  <div class="Todo">
    <!-- {{ this.$store.getters.user.info.couple.todo}} -->
    <v-container >
      <v-card class="mb-2" v-for="todo in this.$store.getters.user.info.couple.todo" :key="todo._id">
        <v-card-title>
          <v-checkbox
            class="mt-0"
            v-model="todo.done"
            :label="todo.description"
            :ripple="false"
          ></v-checkbox>
        </v-card-title>
        <v-card-subtitle align="right">
          {{getDate(todo.duedate)}}
        </v-card-subtitle>
      </v-card>
    </v-container>
    <v-btn fab bottom right fixed class="mb-12" app color="primary">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Todo",
  components: {},
  methods:{
    getDate(timestamp){
      let date = new Date(timestamp);
      return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }
  }
};
</script>
