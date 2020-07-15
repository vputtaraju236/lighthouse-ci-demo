module.exports = async (browser, context) => {
  const page = await browser.newPage();
  await page.goto('https://www.qa.cms.aamc.org/cim/user/login');
  await page.type('[id="edit-name"]', 'test.content_administrator@aamc.org');
  await page.type('[id="edit-pass"]', 'password@123');
  await page.evaluate(() => {
    document.querySelector('[id="edit-submit"]').click();
  });
  await page.waitForNavigation();
  await page.goto('https://www.qa.cms.aamc.org/cim/user/logout/extlogout');
  await page.close();
};
