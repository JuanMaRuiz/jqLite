const bs = require('browser-sync').create();

// Listen to change events on HTML and reload
bs.watch('test/**/*.js').on('change', bs.reload);
// Listen to change events on HTML and reload
bs.watch('test/*.html').on('change', bs.reload);


bs.init({
  server: [".", "test"],
  routes: {
    "./node_modules": "node_modules"
  },
  host: 'localhost',
  port: 3000,
});
