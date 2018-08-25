var gulp = require("gulp");
var minify_css = require("gulp-minify-css");
var minify_html = require("gulp-htmlmin");
var minify_js = require("gulp-uglify");
var checkErr = require("gulp-util");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var autoFx = require("gulp-autoprefixer");
var babel = require("gulp-babel");
var sourceDir = "src/",
    sourceCssDir = sourceDir + "css/";//,
    // sourceHtmlDir = sourceDir + "html/",
    // sourceJsDir = sourceDir + "js/";

//定义一个压缩css的任务
gulp.task("minify_css",function(){
    gulp.src("src/css/**/*.css")//需要压缩的css文件的路径
        .pipe(minify_css())//传输到压缩工具
        .pipe(gulp.dest("dist/css"));//压缩完毕的文件传输到目录
});

gulp.task("minify_html",function(){
    gulp.src("src/**/*.html").pipe(minify_html()).pipe(gulp.dest("dist"));
});

gulp.task("minify_js",function(){
    gulp.src("src/js/**/*.js").pipe(minify_js()).on("error",function(err){
        checkErr.log(checkErr.colors.red("[Error]"),err.toString());
    }).pipe(gulp.dest("dist/js"));
});

// gulp.task("code_sass",function(){
//     gulp.src(".../*.scss").pipe(sass()).pipe(gulp.dest("dist/..."))
// })
// gulp.task("sass:watch",function(){
//     gulp.src("../*.scss",["code_sass"]);
// })

// var reload = browserSync.reload;
// gulp.task("browser_sync",function(){
//     browserSync.init({
//         port:3030,
//         server:{
//             baseDir:sourceDir,
//             index:""
//         }
//     })
// })
// gulp.task("dev",["browser_sync"],function(){

// })

// gulp.task('autoFx', function () {
//     gulp.src('src/css/index.css')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions', 'Android >= 4.0'],
//             cascade: true, //是否美化属性值 默认：true 像这样：
//             //-webkit-transform: rotate(45deg);
//             //        transform: rotate(45deg);
//             remove:true //是否去掉不必要的前缀 默认：true 
//         }))
//         .pipe(gulp.dest('dist/css'));
// });

gulp.task("build",["minify_css","minify_html","minify_js"],function(){});