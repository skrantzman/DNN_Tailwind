const { func } = require("assert-plus");

var bs = require("browser-sync").create(),
	gulp = require("gulp"),
	postcss = require("gulp-postcss"),
	cssvars = require("postcss-simple-vars"),
	nested = require("postcss-nested"),
	cssImport = require("postcss-import"),
	tailwindcss = require("tailwindcss"),
	autoprefixer = require("autoprefixer"),
	purgecss = require("@fullhuman/postcss-purgecss"),
	jshint = require("gulp-jshint"),
	sass = require("gulp-sass"),
	imagemin = require("gulp-imagemin"),
	rename = require("gulp-rename"),
	uglify = require("gulp-uglify"),
	notify = require("gulp-notify"),
	replace = require("gulp-replace"),
	zip = require("gulp-zip"),
	clean = require("gulp-clean"),
	cleanCSS = require("gulp-clean-css"),
	details = require("./project-details.json"),
	project = details.project,
	version = details.version,
	author = details.author,
	company = details.company,
	url = details.url,
	email = details.email,
	description = details.description;

var paths = {
	projectdetails: {
		src: "./project-details.json",
	},
	fonts: {
		src: "./src/fonts/*",
		dest: "./dist/fonts/",
	},
	slimMenu: {
		src: "./src/assets/jquery.slimmenu.min.js",
		dest: "./dist/js/",
	},
	images: {
		src: "./src/images/**/*.{jpg,jpeg,png,gif,svg}",
		dest: "./dist/images/",
	},
	stylescss: {
		src: "./src/css/**/!(style.css)*.css",
	},
	tailwind: {
		src: "./src/css/tailwind.css",
		dest: "./src/css/",
	},
	styles: {
		src: "./src/css/style.css",
		dest: "./dist/css/",
	},
	purge: {
		src: "./src/css/style.css",
		dest: "./src/css/",
	},
	scripts: {
		src: "./src/js/*.js",
		dest: "./dist/js/",
	},
	containers: {
		src: "./containers/*",
		dest: "../../Containers/" + project + "/",
	},
	manifest: {
		src: "./manifest.dnn",
		dest: "./",
	},
	zipdist: {
		src: "dist/**/*",
		zipfile: "dist.zip",
		dest: "./temp/",
	},
	zipcontainers: {
		src: "./containers/**/*",
		zipfile: "cont.zip",
		dest: "./temp/",
	},
	zipelse: {
		src: ["./menus/**/*", "./partials/*", "*.{ascx,xml,html,htm}"],
		zipfile: "else.zip",
		dest: "./temp/",
	},
	zippackage: {
		src: ["./temp/*.zip", "*.{dnn,png,jpg,txt}", "LICENSE"],
		zipfile: project + "_" + version + "_install.zip",
		dest: "./build/",
	},
	cleantemp: {
		src: "./temp/",
	},
	cleandist: {
		src: "./dist/",
	},
};

/*------------------------------------------------------*/
/* INIT TASKS ------------------------------------------*/
/*------------------------------------------------------*/
// Copy fonts from src/fonts to dist/fonts
function fontsInit() {
	return gulp
		.src(paths.fonts.src)
		.pipe(gulp.dest(paths.fonts.dest))
		.pipe(notify({ message: "<%= file.relative %> distributed!", title: "fontsInit", sound: false }));
}

// Copy jquery.slimmenu.min.js from src/assets to dist/js
function slimMenuInit() {
	return gulp
		.src(paths.slimMenu.src)
		.pipe(gulp.dest(paths.slimMenu.dest))
		.pipe(notify({ message: "<%= file.relative %> distributed!", title: "slimMenuInit", sound: false }));
}

/*------------------------------------------------------*/
/* END INIT TASKS --------------------------------------*/
/*------------------------------------------------------*/

/*------------------------------------------------------*/
/* IMAGE TASKS -----------------------------------------*/
/*------------------------------------------------------*/
// Optimize images and copy to dist/images
function images() {
	return gulp
		.src(paths.images.src, { since: gulp.lastRun(images) })
		.pipe(
			imagemin({
				interlaced: true,
				progressive: true,
				optimizationLevel: 5,
				svgoPlugins: [{ removeViewBox: true }],
			})
		)
		.pipe(gulp.dest(paths.images.dest))
		.pipe(notify({ message: "<%= file.relative %> optimized!", title: "images", sound: false }));
}
/*------------------------------------------------------*/
/* END IMAGE TASKS -------------------------------------*/
/*------------------------------------------------------*/

/*------------------------------------------------------*/
/* TAILWIND TASKS -------------------------------------*/
/*------------------------------------------------------*/
// Create tailwind css file and add prefixes.
function tailwind() {
	return gulp
		.src(paths.tailwind.src)
		.pipe(postcss([cssImport, tailwindcss, cssvars, nested, autoprefixer]))
		.pipe(rename("style.css"))
		.pipe(gulp.dest(paths.tailwind.dest));
}

// Purge unused tailwind classes for css file
function purge() {
	return gulp
		.src(paths.purge.src)
		.pipe(
			postcss([
				purgecss({
					content: [
						"./**/*.html",
						"./**/*.ascx",
						"./src/css/custom-components/*.css",
						"./src/css/custom-layouts/*.css",
						"./src/css/dnn-base-styles/*.css",
					],
					defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
				}),
			])
		)
		.pipe(gulp.dest(paths.purge.dest));
}

/*------------------------------------------------------*/
/* END TAILWIND TASKS -------------------------------------*/
/*------------------------------------------------------*/

/*------------------------------------------------------*/
/* STYLES TASKS ----------------------------------------*/
/*------------------------------------------------------*/
// Compile custom SCSS to CSS and copy to dist/css
function styles() {
	return gulp
		.src(paths.styles.src, { sourcemaps: true })
		.pipe(sass({ includePaths: ["./node_modules"] }, { outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(cleanCSS())
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest(paths.styles.dest, { sourcemaps: "." }))
		.pipe(notify({ message: "<%= file.relative %> compiled and distributed!", title: "styles", sound: false }));
}
/*------------------------------------------------------*/
/* END STYLES TASKS ------------------------------------*/
/*------------------------------------------------------*/

/*------------------------------------------------------*/
/* SCRIPTS TASKS ---------------------------------------*/
/*------------------------------------------------------*/
// Compile custom JS and copy to dist/js
function scripts() {
	return gulp
		.src(paths.scripts.src, { sourcemaps: true })
		.pipe(jshint())
		.pipe(uglify())
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest(paths.scripts.dest, { sourcemaps: "." }))
		.pipe(jshint.reporter("default"))
		.pipe(jshint.reporter("fail"))
		.pipe(notify({ message: "<%= file.relative %> minified!", title: "scripts", sound: false }));
}
/*------------------------------------------------------*/
/* END SCRIPTS TASKS -----------------------------------*/
/*------------------------------------------------------*/

/*------------------------------------------------------*/
/* DNN TASKS -------------------------------------------*/
/*------------------------------------------------------*/
// Copy containers to proper DNN theme containers folder
function containers() {
	return gulp
		.src(paths.containers.src)
		.pipe(gulp.dest(paths.containers.dest))
		.pipe(notify({ message: "<%= file.relative %> distributed!", title: "containers", sound: false }));
}

// Update manifest.dnn
function manifest() {
	return gulp
		.src(paths.manifest.src)
		.pipe(replace(/\<package name\=\"(.*?)(?=\")/, '<package name="' + company + "." + project))
		.pipe(replace(/type\=\"Skin\" version\=\"(.*?)(?=\")/, 'type="Skin" version="' + version))
		.pipe(replace(/\<friendlyName\>(.*?)(?=\<)/, "<friendlyName>" + project))
		.pipe(replace(/\<description\>(.*?)(?=\<)/, "<description>" + description))
		.pipe(replace(/\<name\>(.*?)(?=\<)/, "<name>" + author))
		.pipe(replace(/\<organization\>(.*?)(?=\<)/, "<organization>" + company))
		.pipe(replace(/\<url\>(.*?)(?=\<)/, "<url>" + url))
		.pipe(replace(/\<email\>(.*?)(?=\<)/, "<email>" + email))
		.pipe(replace(/\<skinName\>(.*?)(?=\<)/, "<skinName>" + project))
		.pipe(replace(/(\\Skins\\)(.*?)(?=\\)/g, "\\Skins\\" + project))
		.pipe(replace(/(\\Containers\\)(.*?)(?=\\)/g, "\\Containers\\" + project))
		.pipe(gulp.dest(paths.manifest.dest))
		.pipe(notify({ message: "<%= file.relative %> updated!", title: "manifest", sound: false }));
}
/*------------------------------------------------------*/
/* END DNN TASKS ---------------------------------------*/
/*------------------------------------------------------*/

/*------------------------------------------------------*/
/* MAINTENANCE TASKS -----------------------------------*/
/*------------------------------------------------------*/
// Clean up dist folder
function cleandist() {
	return gulp
		.src(paths.cleandist.src, { allowEmpty: true })
		.pipe(clean())
		.pipe(notify({ message: "dist folder cleaned up!", title: "cleandist", sound: false }));
}
/*------------------------------------------------------*/
/* END MAINTENANCE TASKS -------------------------------*/
/*------------------------------------------------------*/

/*------------------------------------------------------*/
/* PACKAGING TASKS -------------------------------------*/
/*------------------------------------------------------*/
// ZIP contents of dist folder
function zipdist() {
	return gulp
		.src(paths.zipdist.src)
		.pipe(zip(paths.zipdist.zipfile))
		.pipe(gulp.dest(paths.zipdist.dest))
		.pipe(notify({ message: "<%= file.relative %> temporarily created!", title: "zipdist", sound: false }));
}

// ZIP contents of containers folder
function zipcontainers() {
	return gulp
		.src(paths.zipcontainers.src)
		.pipe(zip(paths.zipcontainers.zipfile))
		.pipe(gulp.dest(paths.zipcontainers.dest))
		.pipe(notify({ message: "<%= file.relative %> temporarily created!", title: "zipcontainers", sound: false }));
}

// ZIP everything else
function zipelse() {
	return gulp
		.src(paths.zipelse.src, { base: "." })
		.pipe(gulp.dest(paths.zipelse.dest))
		.pipe(notify({ message: "<%= file.relative %> temporarily created!", title: "zipcontainers", sound: false }))
		.pipe(replace("dist/", ""))
		.pipe(zip(paths.zipelse.zipfile))
		.pipe(gulp.dest(paths.zipelse.dest))
		.pipe(notify({ message: "<%= file.relative %> temporarily created!", title: "zipcontainers", sound: false }));
}

// git ziptemp
var ziptemp = gulp.series(zipdist, zipcontainers, zipelse);

// Assemble files into DNN theme install package
function zippackage() {
	return gulp
		.src(paths.zippackage.src)
		.pipe(zip(paths.zippackage.zipfile))
		.pipe(gulp.dest(paths.zippackage.dest))
		.pipe(notify({ message: "<%= file.relative %> created!", title: "zippackage", sound: false }));
}

// Clean temp folder
function cleantemp() {
	return gulp
		.src(paths.cleantemp.src)
		.pipe(clean())
		.pipe(notify({ message: "temp folder cleaned up!", title: "cleantemp", sound: false }));
}
/*------------------------------------------------------*/
/* END PACKAGING TASKS ---------------------------------*/
/*------------------------------------------------------*/

/*------------------------------------------------------*/
/* DEV TASKS -------------------------------------------*/
/*------------------------------------------------------*/
//gulp serve
function serve() {
	bs.init({
		proxy: "nvQuickTheme.loc",
	});
	gulp.watch(paths.images.src, images).on("change", bs.reload);
	gulp.watch(paths.stylescss.src, gulp.series(tailwind)).on("change", bs.reload);
	gulp.watch(paths.styles.src, styles).on("change", bs.reload);
	gulp.watch(paths.scripts.src, scripts).on("change", bs.reload);
	gulp.watch(paths.containers.src, containers).on("change", bs.reload);
}

// gulp watch
function watch() {
	gulp.watch(paths.images.src, images);
	gulp.watch(paths.stylescss.src, gulp.series(tailwind));
	gulp.watch(paths.styles.src, styles);
	gulp.watch(paths.scripts.src, scripts);
	gulp.watch(paths.containers.src, containers);
}

// gulp init
var init = gulp.series(fontsInit, slimMenuInit);

// gulp build
var build = gulp.series(cleandist, init, tailwind, styles, scripts, images, containers, manifest);

//gulp build_p
var build_p = gulp.series(cleandist, init, tailwind, purge, styles, scripts, images, containers, manifest);

// gulp package
var package = gulp.series(build, ziptemp, zippackage, cleantemp);

// gulp package_p
var package_p = gulp.series(build_p, ziptemp, zippackage, cleantemp);

// gulp purge
var purge = gulp.series(purge);

// gulp tailwind
var tailwind = gulp.series(tailwind);

/*------------------------------------------------------*/
/* END DEV TASKS ---------------------------------------*/
/*------------------------------------------------------*/

/*------------------------------------------------------*/
/* EXPORT TASKS ----------------------------------------*/
/*------------------------------------------------------*/
// You can use CommonJS `exports` module notation to declare tasks
exports.fontsInit = fontsInit;
exports.slimMenuInit = slimMenuInit;
exports.images = images;
exports.tailwind = tailwind;
exports.styles = styles;
exports.purge = purge;
exports.scripts = scripts;
exports.containers = containers;
exports.manifest = manifest;
exports.cleandist = cleandist;
exports.zipdist = zipdist;
exports.zipcontainers = zipcontainers;
exports.zipelse = zipelse;
exports.ziptemp = ziptemp;
exports.zippackage = zippackage;
exports.cleantemp = cleantemp;
exports.serve = serve;
exports.watch = watch;
exports.init = init;
exports.build = build;
exports.build_p = build_p;
exports.package = package;
exports.package_p = package_p;

// Define default task that can be called by just running `gulp` from cli
exports.default = build;
/*------------------------------------------------------*/
/* END EXPORT TASKS ------------------------------------*/
/*------------------------------------------------------*/
