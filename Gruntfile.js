module.exports = function( grunt ) {
	/*
	 * Time taken for grunt tasks
	 */
	require( 'time-grunt' )( grunt );


	/*
	 * Load all Grunt tasks
	 */
	require( 'load-grunt-tasks' )( grunt );
	grunt.loadNpmTasks( 'assemble' );


	/*
	 * Define variables for tasks
	 */
	var vars = {
		pkg: grunt.file.readJSON( 'package.json' ),
		emailsFolder: 'emails',
		emailsBuildFolder: 'emails/build'
	};


	/*
	 * Set location to load grunt tasks form
	 */
	vars.config = {
		src: 'tasks/*.js'
	};

	var configs = require( 'load-grunt-configs' )( grunt, vars );

	grunt.initConfig( configs );


	/*
	 * Define tasks
	 */
	grunt.registerTask( 'emails', [
		'clean:emails',
		'sass:emails',
		'assemble:emails',
		'premailer',
		'clean:emailsTmp',
		'copy:emailImages'
	]);

	grunt.registerTask( 'dev', [
		'emails',
		'watch:emails'
	]);

	grunt.registerTask( 'build', [
		'emails',
		'imageoptim:emails'
	]);
};
