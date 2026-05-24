const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport width and height
  await page.setViewport({ width: 1280, height: 720 });

  const website_url = 'https://www.bannerbear.com/blog/how-to-convert-html-into-pdf-with-node-js-and-puppeteer/';
  await page.goto(website_url, { waitUntil: 'networkidle0' });

  // Capture screenshot
  await page.screenshot({
    path: 'bannerbear.jpg',
  });

  console.log('Screenshot captured successfully!');

  //To reflect CSS used for screens instead of print
  await page.emulateMediaType('screen');

  // Download the PDF
  const pdf = await page.pdf({
    path: 'bannerbear.pdf',
    margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
    printBackground: true,
    format: 'A4',
  });
  console.log('PDF generated successfully!');

  // close everything
  await page.close();
  await browser.close();

})();