'use strict';
module.exports = {
	emails: {
		options: {
			flatten: true,
			layoutdir: '<%= emailsFolder %>/src/layouts',
			partials: [ '<%= emailsFolder %>/src/partials/**/*.hbs' ]
		},
		src: '<%= emailsFolder %>/src/pages/*.hbs',
		dest: '<%= emailsFolder %>/tmp/'
	}
};
