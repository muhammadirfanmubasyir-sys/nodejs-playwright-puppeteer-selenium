const { Builder, By, Key, until } = require('selenium-webdriver');

const chrome = require('selenium-webdriver/chrome');

let options = new chrome.Options();
//options.addArguments('--headless'); // Enable headless mode
// Hide the webdriver flag
options.addArguments('--disable-blink-features=AutomationControlled');
options.excludeSwitches('enable-automation');
options.addArguments('--disable-infobars');

async function runExample() {
  // Initialize the Chrome driver
  let driver = await new Builder()
                .forBrowser('chrome')
                .setChromeOptions(options)
                .build();

  try {
    // Navigate to a URL
    await driver.get('https://www.google.com');

    // Find the search box by its name attribute ('q') and type 'Node.js'
    await driver.findElement(By.name('q')).sendKeys('Node.js Selenium', Key.RETURN);

    // Wait until the page title contains the expected text
    await driver.wait(until.titleContains('Node.js Selenium'), 10000);

    console.log('Search completed successfully!');
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Close the browser
    await driver.quit();
  }
}

runExample();
