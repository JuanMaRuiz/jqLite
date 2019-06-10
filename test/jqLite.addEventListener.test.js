describe('Events', () => {
  describe('jq.addEventListener', () => {
    it('should be defined', () => {
      expect(jq.addListener, 'jq.addListener undefined or null').to.be.defined;
    });
  });
});
