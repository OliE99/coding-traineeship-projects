const {assert} = require('chai');

describe('User visits root', () => {
  describe('Posting quotes', () => {
    it('Save quote and metadata submitted by User', () => {

      //Setup
      const quote = "The world aint all sunshine and rainbows. It is a very mean and nasty place and it will beat you to your knees and keep you there permanently if you let it. You, me, or nobody is gonna hit as hard as life. But it aint how hard you hit; its about how hard you can get hit, and keep moving forward. How much you can take, and keep moving forward.";
      const attributed = "Rocky Balboa";
      const source = "Rocky";

      //Exercise
      browser.url('/');
      browser.setValue('textarea[id=quote]', quote);
      browser.setValue('input[id=attributed]', attributed);
      browser.setValue('input[id=source]', source);
      browser.click('input[type=submit]');

      //Verify
      assert.include(browser.getText('#quotes'), quote);
      assert.include(browser.getText('#quotes'), attributed);
      assert.include(browser.getText('#quotes'), source);
    });
  });
});