'use strict';
module.exports = {
	emailImages: {
		files: [
		{
			expand: true,
			cwd: '<%= assetsFolder %>/img/emails/',
			src: [ '*' ],
			dest: '<%= emailsBuildFolder %>/img'
		}
		]
	}
};
