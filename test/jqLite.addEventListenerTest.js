describe('Events', () => {
  describe('jqLite.addEventListener', () => {
    it('should be defined', () => {
      assert.exists(jqLite.addListener, 'jqLite.addListener undefined or null');
    });
  });
});
