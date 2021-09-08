import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
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
		path: '/add',
		component: () => import('@/views/PostAddPage.vue'),
		meta: { auth: true },
	},
	{
		path: '/main',
		component: () => import('@/views/MainPage.vue'),
		meta: { auth: true },
	},
	{
		path: '/post/:id',
		component: () => import('@/views/PostEditPage.vue'),
		meta: { auth: true },
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

router.beforeEach((to, from, next) => {});

export default router;
