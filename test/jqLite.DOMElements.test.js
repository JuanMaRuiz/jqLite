// describe("DOM Element methods", function() {
//   it('jq.qsa method should return an array of elements', function () {
//     assert.typeOf(jq.qsa('aside'), "array", "we have an array");
//   });

//   before(function () {
//     // add an element to the page to render into
//     const TEST_ELEMENT = $(`<aside></aside>`);
//     $('body').append(TEST_ELEMENT);
//   });

//   it('jq.qsa("aside") should return one element', function () {
//     assert.lengthOf(jq.qsa('aside'), 1, "only one element returned");
//   });

//   before(function () {
//     // Adds to elements on the page with jQuery
//     const TEST_ELEMENT = $('<div class="foo"></div><div class="foo"></div>');
//     $('body').append(TEST_ELEMENT);
//   });

//   it('jq.qsa should find 2 foo elements in the DOM', function () {
//     assert.lengthOf(jq.qsa('.foo'), 2, "The 2 div.foo elements were not found in the html");
//   });
// });
