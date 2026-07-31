const { expect } = require('@playwright/test');

class SauceDemoLoginPage {
    constructor(page) {
        this.page = page;
        this.userNameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.inventoryTitle = page.locator('.title');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(userName, password) {
        await this.userNameInput.fill(userName);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForURL('**/inventory.html');
    }

    async verifyInventoryPage() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(this.inventoryTitle).toBeVisible();
    }

    async verifyProductVisible(productName) {
        const productLocator = this.page.locator('.inventory_item_name', { hasText: productName });
        await expect(productLocator).toBeVisible();
    }
}

module.exports = { SauceDemoLoginPage };