import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

import Main from '../views/Main.vue';
import Signin from '../views/Signin.vue';
import Home from '../views/Home.vue';
import Todo from '../views/Todo.vue';
import Calendar from '../views/Calendar.vue';


const requireAuth = () => (to, from, next) => { 
    if(store.getters.user.accessToken){
        return next()
    }
    next('signin');
}


Vue.use(VueRouter);

const routes = [
	{
		path: '',
		name: 'Main',
		beforeEnter:requireAuth(),
		component: Main,
		children:[
			{
				path: '',
				redirect: 'home'
			},
			{
				name:'Home',
				path: 'home',
				component: Home,
			},
			{
				name:'Todo',
				path: 'todo',
				component: Todo,
			},
			{
				name:'Calendar',
				path: 'calendar',
				component: Calendar,
			},
		]
	},
	{
		path: '/signin',
		name: 'Signin',
		component: Signin,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;