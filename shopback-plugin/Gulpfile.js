"use strict";

var banner        = ['/**',
	' * <%= pkg.name %> - <%= pkg.description %>',
	' * @authors <%= pkg.authors %>',
	' * @link <%= pkg.homepage %>',
	' * @version v<%= pkg.version %>',
	' */',
	''].join('\n');
var browserSync   = require('browser-sync').create();
var concat        = require('gulp-concat');
var del           = require('del');
var rimraf    	  = require('rimraf');
var gulp          = require('gulp');
var header        = require('gulp-header');
var notify        = require('gulp-notify');
var pkg           = require('./package.json');
var plumber       = require('gulp-plumber');
var rename        = require('gulp-rename');
var runSequence   = require('run-sequence');
var uglify        = require('gulp-uglify');
var yargs   	  = require('yargs');

// var webpack       = require('webpack-stream');

const PRODUCTION = !!(yargs.argv.production);

// TASKS
// =====================================================

	// FOR UPDATING CURRENT VERSION
	// gulp.task('default', gulp.series(clean, server, latest, watch));
	gulp.task('default', gulp.series(clean, latest));

	// FOR BUILD A NEW VERSION
	gulp.task('build', gulp.series(clean_version, current_version_src, current_version_dist));

// [end] TASKS
// =====================================================


// FUNCTIONS
// =====================================================
	
	// Delete the "dist" folder
	// function clean(done) { 
		// return del(['**/.DS_Store']);
	// }

	function clean(done) { 
		rimraf("./dist/shopback-plugin.js", done);
		rimraf("./dist/shopback-plugin.min.js", done);
		done();
	}
	function clean_version(done) { 
		rimraf("./dist/"+ pkg.version +"/shopback-plugin."+ pkg.version +".js", done);
		rimraf("./dist/"+ pkg.version +"/shopback-plugin."+ pkg.version +".min.js", done);
		done();
	}



	function latest() {
		return gulp.src(['./src/shopback-plugin.js'])
			.pipe(rename('shopback-plugin.js'))
			.pipe(header(banner, { pkg : pkg } ))
			.pipe(gulp.dest('./dist/'))
			.pipe(uglify())
			.pipe(rename({
				suffix: '.min'
			}))
			.pipe(header(banner, { pkg : pkg } ))
			.pipe(gulp.dest('./dist/'))
			.pipe(notify('shopback-plugin latest version: '+ pkg.version +' updated.'));
	}

	function current_version_src() {
		return gulp.src(['./src/shopback-plugin.js'])
			.pipe(rename('shopback-plugin.'+ pkg.version +'.js'))
			.pipe(header(banner, { pkg : pkg } ))
			.pipe(gulp.dest('./src/'+pkg.version))
			.pipe(notify('shopback-plugin current version: '+ pkg.version +' src updated.'));
	}
	function current_version_dist() {
		return gulp.src(['./src/shopback-plugin.js'])
			.pipe(rename('shopback-plugin.'+ pkg.version +'.js'))
			.pipe(header(banner, { pkg : pkg } ))
			.pipe(gulp.dest('./dist/'+pkg.version))
			.pipe(uglify())
			.pipe(rename({
				suffix: '.min'
			}))
			.pipe(header(banner, { pkg : pkg } ))
			.pipe(gulp.dest('./dist/'+pkg.version))
			.pipe(notify('shopback-plugin current version: '+ pkg.version +' dist updated.'));
	}
	// .pipe(webpack({
	// 	output: {
	// 		chunkFilename: '[name].js',
	// 		library: 'ShopbackPlugin',
	// 		libraryTarget: 'umd',
	// 		umdNamedDefine: true
	// 	}
	// }))
	// gulp.task('scripts', 'scripts');

// [end] FUNCTIONS
// =====================================================


// SERVER / WATCH
// =====================================================

	// Start a server with LiveReload to preview the site in
	function server(done) { browserSync.init({ server: "./" }); done(); }

	// Watch for file changes
	function watch() {

		// SCRIPTS
		gulp.watch('./src/*.js').on('all', gulp.series(latest, browserSync.reload));
		// gulp.watch(['./src/shopback-plugin.js']).on('change', browserSync.reload);

	}

// [end] SERVER / WATCH
// =====================================================
