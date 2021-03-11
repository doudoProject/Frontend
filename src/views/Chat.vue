<template>
	<v-dialog v-model="dialog" fullscreen hide-overlay persistent transition="dialog-bottom-transition">
		<template v-slot:activator="{ on, attrs }">
			<v-btn class="fab-chat" fab fixed right bottom :v-bind="attrs" v-on="on" color="primary">
				<v-icon>mdi-chat</v-icon>
			</v-btn>
		</template>
		<v-card>
			<v-app-bar fixed dark color="primary">
				<v-btn icon dark @click="dialog = false">
					<v-icon>mdi-close</v-icon>
				</v-btn>
				<v-app-bar-title>{{ user.couple.name }} 채팅</v-app-bar-title>
			</v-app-bar>
			<v-container class="chatHolder" style="margin-bottom:60px;margin-top:56px;">
				<v-row class="pb-2">
					<ChatMessage v-for="(item,index) in $store.getters.chat" :key="index" :chat="item" :self="item.sender === user.userid"/>
					<div ref="end"></div>
				</v-row>
				<v-footer fixed>
					<v-text-field label="type message" solo v-model="newChatMessage" hide-details @keypress.enter="addChat(newChatMessage)">
						<template v-slot:append-outer>
							<div class="v-input__icon" style="width:auto">
								<v-btn color="primary" fab small @click="addChat(newChatMessage)">
									<v-icon color="white">mdi-send</v-icon>
								</v-btn>
							</div>
						</template>
					</v-text-field>
				</v-footer>
			</v-container>
		</v-card>
	</v-dialog>
</template>

<script>
import ChatMessage from '../components/ChatMessage'
export default {
	name: 'Chat',
	props: ['user'],
	components: {
		ChatMessage
	},
	data: () => ({
		dialog: false,
		newChatMessage: '',
	}),
	watch:{
		dialog(){
			if(this.dialog) this.fetchChat();
		},
	},
	updated(){
		this.goToBottom();
	},
	methods: {
		goToBottom(){
			try{
				this.$refs.end.scrollIntoView();
			}
			catch(error){
				return; //unstable
			}
		},
		fetchChat() {
			let dayBefore7 = new Date();
			dayBefore7.setDate(dayBefore7.getDate() - 7);
			this.$store.dispatch('fetchChat', {
				datetime: dayBefore7.getTime()
			})
			.then(()=>{
				this.goToBottom();
			});
		},
		addChat(newMessage) {
			if (!newMessage) return this.$store.commit('showSnackbar', {
				message: '메세지를 입력해주세요'
			})
			this.newChatMessage='';
			this.$store.dispatch('addChat', {message:newMessage})
			.then(() => {

			})
		}
	}
}
</script>

<style>

</style>
