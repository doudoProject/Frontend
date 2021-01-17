<template>
  <div class="Todo">
    <v-container class="text-center">
      <v-text-field
        hide-details
        placeholder="할일을 적어봐요"
        solo
        clearable
        append-outer-icon="mdi-plus-circle"
        @click:append-outer="addTodo()"
        @keypress.enter="addTodo()"
        class="mb-2"
        v-model="newTodo.description"
      ></v-text-field>
      <swipe-list
        class="card"
        :items="$store.getters.user.info.couple.todo"
        item-key="_id"
        :disabled="editMode !== null">
        <template v-slot="{ item, index }">
          <v-card class="mb-2">
            <v-card-text>
              <v-checkbox
                class="mt-0"
                v-model="item.done"
                :label="item.description"
                :ripple="false"
                hide-details
                @change="modifyTodo(item)"
                v-if="editMode !== index"
              ></v-checkbox>
              <v-text-field
                class="mt-0"
                hide-details
                solo
                v-model="editingTodo.description"
                v-if="editMode === index"
                append-outer-icon="mdi-content-save"
                @click:append-outer="addTodo()"
                @keypress.enter="addTodo()"
              >
                <template v-slot:append-outer>
                  <div class="v-input__icon" style="width:auto">
                    <v-btn color="green" fab x-small class="mr-1" @click="modifyTodo(editingTodo)"><v-icon color="white">mdi-content-save</v-icon></v-btn>
                    <v-btn color="red" fab x-small @click="editMode = null"><v-icon color="white">mdi-close</v-icon></v-btn>
                  </div>
                </template>
              </v-text-field>
            </v-card-text>
          </v-card>
        </template>
        <template v-slot:right="{ item, index, close }">
          <v-card color="green" class="mb-2" align="center">
            <v-card-text style="height:100%;display:inline-flex;" @click="editTodo(index);close();">
              <v-icon color="white">mdi-pencil</v-icon>
            </v-card-text>
          </v-card>
          <v-card color="red" class="mb-2" align="center">
            <v-card-text style="height:100%;display:inline-flex;" @click="deleteTodo(item._id);close();">
              <v-icon color="white">mdi-delete</v-icon>
            </v-card-text>
          </v-card>
        </template>
      </swipe-list>
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
import { SwipeList  } from 'vue-swipe-actions';
import 'vue-swipe-actions/dist/vue-swipe-actions.css';

export default {
  name: "Todo",
  components:{
    SwipeList
  },
  data:()=>({
    newTodo:{
      description:null,
      duedate:null,
    },
    editingTodo:null,
    editMode:null,
    isTodoBusy:false,
  }),
  methods:{
    getDate(timestamp){
      let date = new Date(timestamp);
      return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    },
    editTodo(index){
      this.editMode = index;
      this.editingTodo = JSON.parse(JSON.stringify(this.$store.getters.user.info.couple.todo[index]));
    },
    addTodo(){
      if(!this.newTodo.description) return this.$store.commit('showSnackbar',{message:'할일을 입력해주세요!'})
      this.isTodoBusy = true;
      this.$store.dispatch('addTodo',{description:this.newTodo.description,duedate:this.newTodo.duedate})
      .then(()=>{
        this.newTodo.description = this.newTodo.duedate = null;
        this.isTodoBusy = false;
      })
    },
    deleteTodo(id){
      this.isTodoBusy = true;
      this.$store.dispatch('deleteTodo',{id:id})
      .then(()=>{
        this.isTodoBusy = false;
      })
    },
    modifyTodo(payload){
      this.isTodoBusy = true;
      this.$store.dispatch('modifyTodo',payload)
      .then(()=>{
        this.isTodoBusy = false;
        this.editMode = null;
      })
    }
  }
};
</script>
