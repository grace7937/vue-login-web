function saveAuthToCookie(value) {
	document.cookie = `til_auth=${value}`;
}

function saveUserToCookie(value) {
	document.cookie = `til_user=${value}`;
}

function getAuthFromCookie() {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	);
}

function getUserFromCookie() {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)til_user\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	);
}
export {
	saveAuthToCookie,
	saveUserToCookie,
	getAuthFromCookie,
	getUserFromCookie,
};
