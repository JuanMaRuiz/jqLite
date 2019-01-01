describe("Generic Tests for jqLite Library", function () {
    describe('jqLite', () => {
        it("should be defined on window load", function () {
            assert.isDefined(window.jqLite, 'jqLite has not been defined')
        });
        it('VERSION should return the correct version', function() {
          assert.equal(jqLite.version, '0.1.0', "jqLite.getVersion() provides the incorrect version");
        });
    });

});
