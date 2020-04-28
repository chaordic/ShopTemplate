'use strict';

import gulp     from 'gulp';
import plugins  from 'gulp-load-plugins';
import browser  from 'browser-sync';
import rimraf   from 'rimraf';
import panini   from 'panini';
import yargs    from 'yargs';
import lazypipe from 'lazypipe';
import fs       from 'fs';
import path     from 'path';
import merge    from 'merge-stream';
import yaml     from 'js-yaml';
import notify   from 'gulp-notify';


// VARS
// =====================================================

	// Load all Gulp plugins into one variable
	const $ = plugins();

	// Look for the --production flag
	const PRODUCTION = !!(yargs.argv.production);

	// Load settings from config.yml
	const { PORT, COMPATIBILITY, UNCSS_OPTIONS, PATHS } = loadConfig();

	// Config loader
	function loadConfig() {
		let ymlFile = fs.readFileSync('config.yml', 'utf8');
		return yaml.load(ymlFile);
	}

// [end] VARS
// =====================================================



// TASKS
// =====================================================

	// Build the "html_overlay" folder by running all of the above tasks
	gulp.task('build', gulp.series(clean, pages, sass, scripts, images, inline));

	// Build, run the server, and watch for file changes
	gulp.task('default', gulp.series('build', server, watch));

// [end] TASKS
// =====================================================



// PAGES / IMAGES / SASS / SCRIPTS
// =====================================================

	// Compile layouts, pages, and partials into flat HTML files
	function pages() {
		return gulp.src('src/pages/**/*.{html,hbs,handlebars}')
			.pipe(panini({
				root: 'src/pages',
				layouts: 'src/layouts',
				partials: 'src/partials',
				data: 'src/data/',
				helpers: 'src/helpers'
			}))
			.pipe(gulp.dest(PATHS.dist));
	}

	// Copy images to the "dist" folder
	// In production, the images are compressed
	function images() {
		return gulp.src('src/assets/img/**/*')
			.pipe($.if(PRODUCTION, $.imagemin( { progressive: true } )))
			.pipe(gulp.dest(PATHS.dist + '/assets/img'));
	}

	// Compile Sass into CSS
	// In production, the CSS is compressed
	function sass() {
		return gulp.src('src/assets/scss/app.scss')
			.pipe($.sass({
				includePaths: PATHS.sass,
				outputStyle: 'compressed'
			})
			.on('error', $.sass.logError))
			.pipe($.autoprefixer({
				browsers: COMPATIBILITY
			}))
			.pipe($.cssnano())
			.pipe(gulp.dest(PATHS.dist + '/assets/css'))
			.pipe(browser.reload({ stream: true }));
	}
	// .pipe($.sourcemaps.init())
	// .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
	// .pipe($.if(PRODUCTION, $.cssnano()))
	// Comment in the pipe below to run UnCSS in production
	// .pipe($.if(PRODUCTION, $.uncss(UNCSS_OPTIONS)))
	// .pipe($.uncss(UNCSS_OPTIONS))

	// Combine JavaScript into one file
	// In production, the file is minified
	function scripts() {
		return gulp.src(PATHS.javascript)
			.pipe($.concat('app.js'))
			.pipe($.uglify())
			.pipe(gulp.dest(PATHS.dist + '/assets/js'));
	}
	// return gulp.src(PATHS.javascript)
	// 	.pipe($.sourcemaps.init())
	// 	.pipe($.concat('app.js'))
	// 	.pipe($.if(PRODUCTION, $.uglify()
	// 		.on('error', e => { console.log(e); })
	// 	))
	// 	.pipe($.if(!PRODUCTION, $.sourcemaps.write()))
	// 	.pipe(gulp.dest(PATHS.dist + '/assets/js'));

// [end] PAGES / IMAGES / SASS / SCRIPTS
// =====================================================



// FUNCTIONS
// =====================================================

	// Delete the "PATHS.dist" folder
	function clean(done) { rimraf(PATHS.dist, done); }

	// Reset Panini's cache of layouts and partials
	function resetPages(done) { panini.refresh(); done(); }

	// Inline CSS/JS and minify HTML
	function inline() {
		return gulp.src(PATHS.dist+'/**/*.html')
			.pipe($.if(PRODUCTION, inlinerCSS(PATHS.dist+'/assets/css/app.css')))
			.pipe($.if(PRODUCTION, inlinerJS(PATHS.dist+'/assets/js/app.js')))
			.pipe(gulp.dest(PATHS.dist))
			.pipe($.notify('Inline CSS/JS and minify HTML: OK!'));
	}
	// .pipe(inlinerCSS(PATHS.dist+'/assets/css/app.css'))
	// .pipe(inlinerJS(PATHS.dist+'/assets/js/app.js'))

	// Inlines JS into HTML, adds JS into the <script> tag of the site
	function inlinerJS(js) {
		var appjs = fs.readFileSync(js).toString();

		var pipe = lazypipe()
			.pipe($.replace, '<!-- <scripts> -->', '<script type="text/javascript">\n'+ appjs +'\n</script>')
			.pipe($.replace, '<script type="text/javascript" src="assets/js/app.js"></script>', '');

		return pipe();
	}

	// Inlines CSS into HTML, adds CSS into the <style> tag of site
	function inlinerCSS(css) {
		var appcss = fs.readFileSync(css).toString();

		var pipe = lazypipe()
			.pipe($.replace, '<!-- <style> -->', '<style>\n'+ appcss +'\n</style>')
			.pipe($.replace, '<link rel="stylesheet" type="text/css" href="assets/css/app.css">', '');

		return pipe();
	}
	// .pipe($.inlineCss, {
	// 	applyStyleTags: false,
	// 	removeStyleTags: true,
	// 	preserveMediaQueries: true,
	// 	removeLinkTags: false
	// })
	// .pipe($.htmlmin, { collapseWhitespace: true, minifyCSS: true });
// [end] FUNCTIONS
// =====================================================



// SERVER / WATCH
// =====================================================

	// Start a server with LiveReload to preview the site in
	function server(done) { browser.init({ server: PATHS.dist }); done(); }

	// Watch for file changes
	function watch() {
		// PAGES
		gulp.watch('src/pages/**/*.html').on('all', gulp.series(pages, inline, browser.reload));
		
		// LAYOUT
		gulp.watch(['src/layouts/**/*', 'src/partials/**/*']).on('all', gulp.series(resetPages, pages, inline, browser.reload));

		// SCSS
		gulp.watch(['../scss/**/*.scss', 'src/assets/scss/**/*.scss']).on('all', gulp.series(resetPages, sass, pages, inline, browser.reload));

		// SCRIPTS
		gulp.watch('src/assets/js/**/*').on('all', gulp.series(scripts, browser.reload));

		// IMAGES
		gulp.watch('src/assets/img/**/*').on('all', gulp.series(images, browser.reload));
	}

// [end] SERVER / WATCH
// =====================================================
