let mix = require('laravel-mix');

require('laravel-mix-banner');

mix
    .disableNotifications()
    .setPublicPath('dist');

let package = require('./package.json');

mix
    .sass('src/app.scss', 'dist/')
    .version()
    .banner({
        banner: (function () {
            return [
                '/*!',
                ' * @project        greenbutter',
                ' * @author         Benjamin Bortels <moin@benjaminbortels.de>',
                ' * @build          ' + new Date().toJSON(),
                ' * @release        ' + package.version,
                ' */',
                '',
            ].join('\n');
        })(),
        raw: true,
    });
