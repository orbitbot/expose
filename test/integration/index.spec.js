describe("hello-test", function () {
  describe("index", function () {
    it("should display the correct title", function () {
      browser.get('/#');
      expect(browser.getTitle()).toBe('Exposure');
    });
  });
});