import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

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

router.beforeEach((to, from, next) => {
	if (to.meta.auth && !store.getters.isLogin) {
		console.log('인증이 필요합니다.');
		next('/login');
		return;
	}
	next();
});

export default router;
