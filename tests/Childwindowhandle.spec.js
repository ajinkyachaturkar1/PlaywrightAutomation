const {test,expect} = require('@playwright/test');


test('Child window handling', async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    const [newPage] = await Promise.all([
        context.waitForEvent('page'), //listen for any new page pending, rejected, fulfilled
        documentLink.click(),
    ])

     const text = await newPage.locator(".red").textContent();
    console.log(text);
})