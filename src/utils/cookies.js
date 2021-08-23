function saveAuthToCookie(vlaue) {
	document.cookie = `til_user=${value}`;
}

function saveUserToCookie(value) {
	document.cookie = `til_user=${value}`;
}

function getAuthFromCookie() {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)til_auth\s*([^:]*).*$)|^.*$/,
		'$1',
	);
}
