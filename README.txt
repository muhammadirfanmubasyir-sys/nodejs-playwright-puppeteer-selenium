========== SELENIUM =========

npm init -y
npm install selenium-webdriver

npm install -g mocha
----------------------------------------------------------
=========== PLAYWRIGHT ============
 
npm init playwright@latest
=========================
first time

npx playwright test
===================
Runs the end-to-end tests.

npx playwright test --ui
========================
Starts the interactive UI mode.

npx playwright test --project=chromium
======================================
Runs the tests only on Desktop Chrome.

npx playwright test example
===========================
Runs the tests in a specific file.

npx playwright test --debug
===========================
Runs the tests in debug mode.

npx playwright codegen
======================
Auto generate tests with Codegen.

============= PUPPETEER ========
npm install puppeteer

npm install --save-dev jest puppeteer jest-puppeteer

