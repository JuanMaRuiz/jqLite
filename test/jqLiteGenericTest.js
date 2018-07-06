describe("Generic Tests for jqLite Library", function () {
    it("should be defined on window load", function () {
        assert.isDefined(window.jqLite, 'jqLite has been defined')
    });

    it('jqLite.VERSION should return the version', function() {
      assert.equal(jqLite.version, '0.1.0', "jqLite.getVersion() provides the incorrect version");
    });
});
