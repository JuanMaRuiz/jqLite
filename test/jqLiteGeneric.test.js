describe('jq', () => {
  it("should be defined on window load", () => {
    assert.isDefined(window.jq, 'jq has not been defined')
  });

  describe('jq.getVersion() method', () => {
    it('should return a string', () => {
      assert.isTrue(typeof jq.version === 'string', 'jq.getVersion() does not return a string');
    });
    it('should have the correct format 0.0.0', () => {
      const regExp = /^(\d[.]){2}\d$/;
      expect(regExp.test(jq.version));
    });
    it('should return the correct version of jq', () => {
      assert.equal(jq.version, '0.1.0', "jq.getVersion() provides the incorrect version");
    });
  });
});
