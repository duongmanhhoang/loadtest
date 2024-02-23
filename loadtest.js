const puppeteer = require('puppeteer');

 
async function runLoadTest() {
    const browser = await puppeteer.launch(({
      headless: true,
    }));
    const page = await browser.newPage();
    await page.goto('url', {timeout: 6000000});
    // await page.waitForNavigation();
    const loadTime = await page.metrics();
    console.log(`Thời gian tải trang: ${JSON.stringify(loadTime)} ms`);
    await browser.close();
  }
 
runLoadTest();
