'use strict';
module.exports = {
	simple: {
		options: {
			removeComments: true,
			preserveStyles: true
		},
		files: [{
			expand: true,
			flatten: true,
			src: [ '<%= emailsFolder %>/tmp/*.html' ],
			dest: '<%= emailsBuildFolder %>/'
		}]
	}
};
