const puppeteer = require("puppeteer");

async function parseProducts(page) {
    let boxes = await page.$$('div.row.product');
    let results = [];

    for(let box of boxes) {
        results.push({
            "title": await box.$eval('a', node => node.innerHTML),
            "link": await box.$eval('a', node => node.getAttribute('href')),
            "price": await box.$eval('div.price', node => node.innerHTML)
        })
    }
    return results;
}

async function run(){
    const browser = await puppeteer.launch({
        headless: false,
        ignoreHTTPSErrors: true,
    });
    page = await browser.newPage();
    data = [];
    for (let i=1; i < 6; i++) {
        await page.goto(`https://web-scraping.dev/products?page=${i}`)
        products = await parseProducts(page)
        data.push(...products);
    }
    console.log(data);
    browser.close();
}

run();