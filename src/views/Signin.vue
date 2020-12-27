<template>
	<div>
		<v-dialog
			v-model="dialog"
			fullscreen
			persistent
			hide-overlay
			transition="dialog-bottom-transition"
		>
			<v-container fill-height>
				<v-img src='@/assets/logo.png' class=""></v-img>
				<v-card-text class="px-6 mb-10" align="center">
					<v-text-field v-model="signInData.userid" dense outlined prepend-inner-icon="mdi-account"/>
					<v-text-field @keyup.enter="signin()" v-model="signInData.password" type="password" dense outlined prepend-inner-icon="mdi-key" class="mt-0 pt-0"/>
					<v-btn block color="primary" @click="signin()">
						로그인
					</v-btn>
				</v-card-text>
			</v-container>
		</v-dialog>
	</div>
</template>

<script>

export default {
	name: 'Signin',
	components: {
	},
	data:()=>({
		dialog:true,
		signInData:{
			userid:null,
			password:null
		}
	}),
	methods:{
		signin(){
			this.$store.dispatch('signin',this.signInData)
			.then(()=>{
				this.$router.push('/');
			})
			.catch(err=>{
				this.$store.commit('showSnackbar',{message:err});
			})
		}
	}
	

}
</script>
