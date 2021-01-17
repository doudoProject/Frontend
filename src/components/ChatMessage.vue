<template>
	<v-col cols="12" class="pb-0">
		<v-alert :color="color" class="mb-0" :class="float">{{ chat.message }} <v-icon>mdi-check{{ chat.read?'-all':'' }}</v-icon> </v-alert>
	</v-col>
</template>

<script>
export default {
		props:['chat','self'],
		name:'ChatMessage',
		computed:{
			float(){
				if(this.self === true)
					return 'float-left';
				return 'float-right';
			},
			color(){
				if(this.self === true)
					return 'secondary';
				return 'primary';
			}
		},
}
</script>

<style>

</style>