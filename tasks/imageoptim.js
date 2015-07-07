'use strict';
module.exports = {
	all: {
		options: {
			jpegMini: false,
			imageAlpha: false,
			quitAfter: false
		},
		src: [
			'<%= assetsBuildFolder %>/img/**/*.{png,gif,jpg}'
		]
	},
	emails: {
		options: {
			jpegMini: false,
			imageAlpha: false,
			quitAfter: false
		},
		src: [
			'<%= emailsBuildFolder %>/img/**/*.{png,gif,jpg}'
		]
	}
};
