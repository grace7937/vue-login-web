<template>
	<div class="toast" :class="toastAnimationClass">
		{{ message }}
	</div>
</template>

<script>
import bus from '@/utils/bus.js';

let toastTimer;

export default {
	data() {
		return {
			open: false,
			message: '',
		};
	},
	computed: {
		toastAnimationClass() {
			return this.open ? 'show' : null;
		},
	},
	methods: {
		showToast(message) {
			this.message = message;
			this.open = true;
			clearTimeout(toastTimer);
			toastTimer = setTimeout(this.hideToast, 2000);
		},
		hideToast() {
			this.open = false;
		},
	},
	created() {
		bus.$on('show:toast', this.showToast);
	},
	beforeDestroy() {
		bus.$off('show:toast', this.showToast);
	},
};
</script>
