describe("DOM Element methods", function() {
  it('jqLite.qsa should return an array', function () {
    assert.typeOf(jqLite.qsa('aside'), "array", "we have an array");
  });

  before(function () {
    // add an element to the page to render into
    let TEST_ELEMENT = $(`<aside></aside>`);
    $('body').append(TEST_ELEMENT);
  });
  it('jqLite.qsa("aside") should return one element', function () {
    assert.lengthOf(jqLite.qsa('aside'), 1, "only one element returned");
  });

  before(function () {
    // Adds to elements on the page with jQuery
    let TEST_ELEMENT = $('<div class="foo"></div><div class="foo"></div>');
    $('body').append(TEST_ELEMENT);
  });
  it('jqLite.qsa should find 2 foo elements in the DOM', function () {
    assert.lengthOf(jqLite.qsa('.foo'), 2, "The 2 div.foo elements were not found in the html");
  });
});
