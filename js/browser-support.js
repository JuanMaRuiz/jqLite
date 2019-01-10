(function (scope) {
  var foo = foo || {};
  let listener;
  if (scope.addEventListener) {
    listener = 'addEventListener';
  }

  foo.listener = function (el, type, fn) {
    el[listener](type, fn, false);
  };

  return scope.foo;
})(window);
