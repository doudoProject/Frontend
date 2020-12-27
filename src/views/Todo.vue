<template>
  <div class="Todo">
    <v-container>
      <div>
        <v-text-field
          hide-details
          placeholder="할일을 적어보세요"
          solo
          clearable
          append-outer-icon="mdi-plus-circle"
          @click:append-outer="$store.commit('showSnackbar',{message:'asd'})"
          class="mb-1"
        ></v-text-field>
      </div>
      <v-card class="mb-1" v-for="todo in this.$store.getters.user.info.couple.todo" :key="todo._id">
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
