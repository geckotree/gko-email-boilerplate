'use strict';
module.exports = {
	emails: {
		files: [
			'<%= emailsFolder %>/src/**/*',
			'<%= emailsFolder %>/sass/*',
		],
		tasks: [
			'clean:emails',
			'sass:emails',
			'assemble:emails',
			'premailer',
			'clean:emailsTmp',
			'copy:emailImages'
		]
	}
};
