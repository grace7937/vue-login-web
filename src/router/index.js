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
		path: '/add',
		component: () => import('@/views/PostAddPage.vue'),
	},
	{
		path: '/signup',
		component: () => import('@/views/Signup.vue'),
	},
	{
		path: '/post/:id',
		component: () => import('@/views/PostEditPage.vue'),
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
