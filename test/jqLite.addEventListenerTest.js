describe('Events', () => {
  describe('jq.addEventListener', () => {
    it('should be defined', () => {
      assert.exists(jq.addListener, 'jq.addListener undefined or null');
    });
  });
});
