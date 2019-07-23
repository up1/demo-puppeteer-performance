const puppeteer = require('puppeteer');

(async () => {
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.connect({
    browserWSEndpoint: `ws://localhost:3000?--user-data-dir=/tmp/session-123`,
  });
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.screenshot({path: 'google.png'});

  await browser.close();
})();