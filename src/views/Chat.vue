<template>
	<v-dialog
			v-model="dialog"
			fullscreen
			hide-overlay
			transition="dialog-bottom-transition"
		>
		<template v-slot:activator="{ on, attrs }">
			<v-btn class="fab-chat" fab fixed right bottom :v-bind="attrs" v-on="on" color="primary"><v-icon>mdi-chat</v-icon></v-btn>
		</template>
		<v-card>
			<v-toolbar
				dark
				color="primary"
			>
				<v-btn
					icon
					dark
					@click="dialog = false"
				>
					<v-icon>mdi-close</v-icon>
				</v-btn>
				<v-toolbar-title>{{ user.couple.name }} 채팅</v-toolbar-title>
			</v-toolbar>
			<v-container class="chatHolder">
				<v-row>
					<ChatMessage v-for="(item,index) in $store.getters.chat" :key="index" :chat="item" :self="item.sender === user.userid"/>
					<v-footer fixed>
					<v-text-field label="type message" solo v-model="newChat.message">
						<template v-slot:append-outer>
              <div  style="width:auto">
                <v-btn color="primary" fab small @click="addChat"><v-icon color="white">mdi-send</v-icon></v-btn>
              </div>
            </template>
					</v-text-field>
					</v-footer>
				</v-row>
			</v-container>
		</v-card>
	</v-dialog>
</template>

<script>
import ChatMessage from '../components/ChatMessage'
export default {
		name:'Chat',
		props:['user'],
		components:{
			ChatMessage
		},
		data:()=>({
			dialog:false,
			newChat:{message:''},
			chats:[
				{message:'채팅 만들고 있어요',sender:'user1',read:true},
				{message:'어떤데요?',sender:'user2',read:true},
				{message:'그럭저럭 이쁜것 같긴 해요',sender:'user1',read:true},
				{message:'그렇군요',sender:'user2',read:false},
			]
		}),
		methods:{
			addChat(){
				this.$store.dispatch('addChat',this.newChat)
				.then(()=>{
					this.newChat.message='';
				})
			}
		}
}
</script>

<style>

</style>