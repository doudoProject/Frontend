import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router';

const localUserData = JSON.parse(localStorage.getItem('user'));
const initialUserData = localUserData?  
localUserData
:
{
	accessToken:null,
	info:null,
};

function SaveUser(state){
    localStorage.setItem('user',JSON.stringify(state.user));
}
function ClearUser(){
    localStorage.removeItem('user');
}

Vue.use(Vuex);

export const resourceHost = 'https://api.doudo.kr/v1';

const axiosInterceptor = axios.interceptors.response.use(
	function (response) {
		//status == 200
		return response;
	},

	function (error) {
		//status != 200
		//some way to process error
		return Promise.reject(error);
	}
);
axiosInterceptor;

export default new Vuex.Store({
	state: {
		user: initialUserData ,
		snackbar:{
			show:false,
			message:''
		}
	},
	getters: {
		user: (state) => {
			return state.user;
		},
		snackbar: (state) =>{
			return state.snackbar;
		}
	},
	mutations: {
		showSnackbar(state,payload){
			state.snackbar.show = true;
			state.snackbar.message = payload.message;
		},
		closeSnackbar(state){
			state.snackbar.show = false;
		},
		setUserInfo(state, payload) {
			state.user.info = payload;
			SaveUser(state);
		},
		setTodo(state,payload){
			if(state.user.info.couple){
				state.user.info.couple.todo = payload;
			}
		},
		addTodo(state,payload){
			if(state.user.info.couple){
				state.user.info.couple.todo.push(payload);
			}
		},
		deleteTodo(state,payload){
			if(state.user.info.couple){
				const idx = state.user.info.couple.todo.findIndex(item=>{return item._id === payload.id})
				if (idx > -1) state.user.info.couple.todo.splice(idx, 1)
			}
		},
		modifyTodo(state,payload){
			if(state.user.info.couple){
				const idx = state.user.info.couple.todo.findIndex(item=>{return item._id === payload._id})
				state.user.info.couple.todo[idx] = payload
			}
		},
		setUserAccessToken(state, payload) {
			state.user.accessToken = payload;
			this.commit('setAuthorization');
		},
		setAuthorization(state){
            axios.defaults.headers.common['Authorization'] = `Bearer ${state.user.accessToken}`
		},
		unsetUser(state){
			ClearUser();
			state.user.info=null;
			state.user.accessToken=null;
		}
	},
	actions: {
		signin({ commit }, payload) {
			return axios({
				method: 'post',
				url: `${resourceHost}/auth/signin`,
				data: {
					userid: payload.userid,
					password: payload.password,
				},
			})
			.then(response=>{
				commit('setUserAccessToken',response.data.accessToken);
				this.dispatch('fetchUser');
			})
		},
		signout({ commit }) {
			commit('unsetUser');
			router.push('/signin');
		},
		fetchUser({ commit }) {
			return axios({
				method: 'get',
				url: `${resourceHost}/user`,
			})
			.then(response=>{
				commit('setUserInfo',response.data);
			})
		},
		fetchTodo({commit}) {
			return axios({
				method: 'get',
				url: `${resourceHost}/todo`
			})
			.then(response=>{
				commit('setTodo',response.data);
			})
		},
		addTodo({commit}, payload) {
			return axios({
				method: 'post',
				url: `${resourceHost}/todo`,
				data: payload
			})
			.then(response=>{
				commit('addTodo',response.data.affected);
			})
		},
		deleteTodo({commit}, payload) {
			return axios({
				method: 'delete',
				url: `${resourceHost}/todo`,
				data: {
					id:payload.id
				}
			})
			.then(()=>{
				commit('deleteTodo',payload);
			})
		},
		modifyTodo({commit}, payload) {
			return axios({
				method: 'put',
				url: `${resourceHost}/todo`,
				data: payload
			})
			.then(()=>{
				commit('modifyTodo',payload);
			})
		}
	},
	modules: {},
});