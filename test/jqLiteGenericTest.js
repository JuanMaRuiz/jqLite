describe("Generic Tests for jqLite Library", function () {
  describe('jqLite', () => {
    it("should be defined on window load", function () {
      assert.isDefined(window.jqLite, 'jqLite has not been defined')
    });
    it('VERSION should return the jqLite version', function () {
      assert.equal(jqLite.version, '0.1.0', "jqLite.getVersion() provides the incorrect version");
      assert.isTrue(typeof jqLite.version === 'string', 'jqLite.getVersion() does not return a string');
    });
    it('VERSION should have the correct format 0.0.0', function () {
      const regExp = /^(\d[.]){2}\d$/;
      expect(regExp.test(jqLite.version));
    });
  });

});
