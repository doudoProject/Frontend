<template>
	<v-col cols="12" class="pb-0 pt-1">
		<v-alert :color="color" class="mb-0" :class="`${float} ${corner} ${textColor} rounded-tl-xl rounded-tr-xl`">{{ chat.message }}<v-icon :class="textColor">mdi-check{{ chat.read?'-all':'' }}</v-icon> </v-alert>
	</v-col>
</template>

<script>
export default {
		props:['chat','self'],
		name:'ChatMessage',
		computed:{
			float(){
				if(this.self === false)
					return 'float-left';
				return 'float-right';
			},
			textColor(){
				if(this.self === false)
					return '';
				return ' white--text';
			},
			color(){
				if(this.self === false)
					return 'secondary';
				return 'primary dark';
			},
			corner(){
				if(this.self === false)
					return 'rounded-br-xl';
				return 'rounded-bl-xl';
			},

		},
}
</script>

<style>

</style>