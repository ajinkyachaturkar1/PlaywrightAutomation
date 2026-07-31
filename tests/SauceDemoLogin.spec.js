const { test, expect } = require('@playwright/test');
const { SauceDemoLoginPage } = require('../pageobjectsClientApp/SauceDemoLoginPage');

test('Sauce Demo login and verify product presence', async ({ page }) => {
    const loginPage = new SauceDemoLoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.verifyInventoryPage();
    await loginPage.verifyProductVisible('Sauce Labs Bike Light');
});