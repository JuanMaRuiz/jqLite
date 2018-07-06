describe("DOM Element methods", function() {
  beforeEach(function () {
    // add an element to the page to render into
    let testElement = $('<section></section>');
    $('body').append(testElement);
  });
  it('jqLite.qsa should return an array', function () {
    assert.typeOf(jqLite.qsa('section'), "array", "we have an array");
  });

  before(function () {
    // Adds to elements on the page with jQuery
    let testElement = $('<div class="foo"></div class="foo"><div class="foo"></div class="foo">');
    $('body').append(testElement);
  });
  it('jqLite.qsa should find 2 foo elements in the DOM', function () {
    assert.lengthOf(jqLite.qsa('.foo'), 2, "The 2 div.foo elements were not found in the html");
  });
});
