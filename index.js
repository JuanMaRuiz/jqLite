const bs = require('browser-sync').create();

// Listen to change events on HTML and reload
bs.watch("test/**/*.js").on("change", bs.reload);

bs.init({
    server: {
        baseDir: __dirname,
        index: `/test/TestRunner.html`,
    },
    host: 'localhost',
    port: 3000
});