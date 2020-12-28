<template>
  <div class="Todo">
    <v-container class="text-center">
      <div>
        <v-text-field
          hide-details
          placeholder="할일을 적어보세요"
          solo
          clearable
          append-outer-icon="mdi-plus-circle"
          @click:append-outer="addTodo()"
          class="mb-2"
          v-model="newTodo.description"
        ></v-text-field>
      </div>
      <v-card class="mb-2" v-for="todo in this.$store.getters.user.info.couple.todo" :key="todo._id">
        <v-card-text>
          <v-checkbox
            class="mt-0"
            v-model="todo.done"
            :label="todo.description"
            :ripple="false"
            hide-details
          ></v-checkbox>
        </v-card-text>
      </v-card>
      <v-progress-circular
      v-if="isTodoBusy"
      class="mt-2"
      indeterminate
      color="primary"
    ></v-progress-circular>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data:()=>({
    newTodo:{
      description:null,
      duedate:null,
    },
    isTodoBusy:false,
  }),
  methods:{
    getDate(timestamp){
      let date = new Date(timestamp);
      return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    },
    addTodo(){
      if(!this.newTodo.description) return this.$store.commit('showSnackbar',{message:'할일을 입력해주세요!'})
      this.isTodoBusy = true;
      this.$store.dispatch('addTodo',{description:this.newTodo.description,duedate:this.newTodo.duedate})
      .then(()=>{
        this.isTodoBusy = false;
      })
    }
  }
};
</script>
