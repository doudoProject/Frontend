<template>
	<v-dialog
		v-model="dialog"
		fullscreen
		persistent
		hide-overlay
		transition="dialog-bottom-transition"
	>
		<v-container fill-height>
			<v-img src='@/assets/logo_doudo_rem.png' class=""></v-img>
			<v-card-text class="px-6 mb-10" align="center">
				<v-text-field
					v-model="signInData.userid"
					hide-details
					dense 
					outlined 
					prepend-inner-icon="mdi-account"
					class="mb-2"
					/>
				<v-text-field 
					@keyup.enter="signin()"
					v-model="signInData.password"
					type="password" 
					hide-details 
					dense 
					outlined 
					prepend-inner-icon="mdi-key"
					class="mb-2"/>
				<v-btn block color="primary" @click="signin()" class="mb-2">
					로그인
				</v-btn>
				<v-btn block @click="signin()">
					회원가입
				</v-btn>
			</v-card-text>
		</v-container>
	</v-dialog>
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

<style>
.v-dialog{
	background: rgb(255,155,155);
	background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,155,155,1) 70%);
}
</style>