//引入gulp及组件
const gulp = require('gulp');
const babel = require('gulp-babel');

//配置开发和发布路径
const path = {
    //开发环境
    src: ['src/**/*.es', '!src/public/*/*.es'],
    //发布环境
    build: './build'
};

/**
 * 建立任务
 * */
gulp.task("praise", () => {
    return gulp.src(path.src)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(path.build));
});

//默认任务：先执行praise，然后监听文件变化
gulp.task('default', ['praise'], () => {
        gulp.watch(path.src, ['praise']);
    }
);


