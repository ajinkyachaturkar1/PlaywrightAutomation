const {test, expect}= require('@playwright/test')

test('Popup Validations', async({page})=>
{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    
    //Validate Hidden element
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();

    //Aler popup
    page.on('dialog', dialog=>dialog.accept());
    await page.locator('#confirmbtn').click();

    //Mouse hover
    await page.locator('#mousehover').hover();

    //iFrames

    const framesPage= page.frameLocator('#courses-iframe');
    await framesPage.locator('iframe[name="iframe-name"]').contentFrame().getByRole('link', { name: 'NEW All Access plan' }).click();
    const textCheck = await framesPage.locator(".text h2").textContent();
    console.log(textCheck.split(" ")[1]);


})