const mix = require('laravel-mix');

mix.disableSuccessNotifications();
mix.setPublicPath('public');


mix.browserSync({
    proxy: 'http://localhost:8080',
    files: ['public/js/**/*.js', 'public/css/**/*.css'],
    stream: true,
});


mix.js('src/js/main.js', 'js')
    .sass('src/scss/main.scss', 'css')
    .options({
        processCssUrls: false,
    })
    .version();