<template>
	<div class="home pa-2">
    <v-card>
      <v-card-text>
      userid : {{this.$store.getters.user.info.userid}}<br>
      email : {{this.$store.getters.user.info.email}}<br>
      name : {{this.$store.getters.user.info.name}}<br>
      couple : {{this.$store.getters.user.info.couple?'yes':'no'}}<br>
      couple.name : {{this.$store.getters.user.info.couple.name}}<br>
      couple.todo : {{this.$store.getters.user.info.couple.todo}}
      </v-card-text>
    </v-card>
	</div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  }
}
</script>
