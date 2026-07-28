const {test, expect} = require('@playwright/test');

test('Browser Context Playwright test', async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const signInBtn = page.locator('#signInBtn');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await userName.fill("rahulshetty");
    await page.locator('#password').fill("Learning@830$3mK2");
    await signInBtn.click();
    console.log(await page.locator("[style*='block']").textContent()); 
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    //type correct user name and login

    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signInBtn.click();
    console.log(await page.locator(".card-body a").first().textContent());
    console.log(await page.locator(".card-body a").nth(1).textContent());



});

test('Page Playwright test', async({page})=>
{
await page.goto("https://google.com");
console.log(await page.title());
await expect(page).toHaveTitle("Google");
});