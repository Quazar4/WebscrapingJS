const puppeteer = require('puppeteer');

async function scrapeBooks(number) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`http://books.toscrape.com/catalogue/page-${number}.html`);
    
    const titles = await page.evaluate(() => {
    const titleNodes = document.querySelectorAll('.product_pod h3 a');
    return Array.from(titleNodes).map(node => node.getAttribute('title'));
    });
    
    await browser.close();    
    console.log('Book Titles:', titles);    
}

// Example - 3rd page
scrapeBooks(3)
