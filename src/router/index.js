import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/main',
		component: () => import('@/views/MainPage.vue'),
	},
	{
		path: '/',
		redirect: 'login',
	},
	{
		path: '/login',
		component: () => import('@/views/Login.vue'),
	},
	{
		path: '/signup',
		component: () => import('@/views/Signup.vue'),
	},
	{
		path: '*',
		component: () => import('@/views/NotFoundPage.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
