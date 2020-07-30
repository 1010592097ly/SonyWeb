const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
gulp.task("copy-html", function () {
    return gulp.src("*.html")
    .pipe(htmlmin({
        removeEmptyAttibutes: true, // 移出所有空属性
        collapseWhitespace: true, // 压缩 html
    }))
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload())
})
//图片
gulp.task("copy-images", function () {
    return gulp.src("*.{jpg,png}")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload())
})
//js代码
gulp.task("copy-js", function () {
    return gulp.src(["*.js","!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload())
})
//数据
gulp.task("data", function () {
    return gulp.src(["*.json", "!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})
//php文件
gulp.task("copy-php", function () {
    return gulp.src("*.php")
    .pipe(gulp.dest("dist/phps"))
    .pipe(connect.reload());
})

const scss = require("gulp-sass");
const rename = require("gulp-rename");
const minifyCSS = require("gulp-minify-css");
gulp.task("index-scss", function () {
    return gulp.src("stylesheet/index.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})
gulp.task("banner-scss", function () {
    return gulp.src("stylesheet/banner.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("banner.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})
gulp.task("register-scss", function () {
    return gulp.src("stylesheet/register.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("register.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})
gulp.task("login-scss", function () {
    return gulp.src("stylesheet/login.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("login.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})
gulp.task("product-scss", function () {
    return gulp.src("stylesheet/product.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("product.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})
gulp.task("detail-scss", function () {
    return gulp.src("stylesheet/detail.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("detail.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})
gulp.task("goodscar-scss", function () {
    return gulp.src("stylesheet/goodscar.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("goodscar.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})
gulp.task(
    "build",
    ["copy-html","copy-images","copy-js","data","index-scss"],
    function () {
        console.log("项目创建成功")
})

gulp.task("watch", function () {
    gulp.watch("*.html", ["copy-html"]);
    gulp.watch("*.{jpg,png}", ["copy-images"]);
    gulp.watch(["*.js", "!gulpfile.js"], ["copy-js"]);
    gulp.watch(["*.json", "!package.json"], ["data"]);
    gulp.watch("stylesheet/index.scss", ["index-scss"]);
    gulp.watch("stylesheet/banner.scss",["banner-scss"]);
    gulp.watch("stylesheet/register.scss",["register-scss"]);
    gulp.watch("*.php",["copy-php"]);
    gulp.watch("stylesheet/login.scss",["login-scss"]);
    gulp.watch("stylesheet/product.scss",["product-scss"]);
    gulp.watch("stylesheet/detail.scss",["detail-scss"]);
    gulp.watch("stylesheet/goodscar.scss",["goodscar-scss"]);
});
const connect = require("gulp-connect");
gulp.task("server", function () {
  connect.server({
    root: "dist",
    port: 1234,
    livereload: true,
  });
});
gulp.task("default", ["watch", "server"]);
