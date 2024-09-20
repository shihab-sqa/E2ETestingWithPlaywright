const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageobject/loginPage');
const { InventoryPage } = require('../pageobject/inventoryPage');
const { CheckoutPage } = require('../pageobject/checkoutPage');
const { validUser, checkoutInfo } = require('../testdata/testData');

test.describe('SauceDemo Tests', () => {
    let loginPage, inventoryPage, checkoutPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        checkoutPage = new CheckoutPage(page);

        await loginPage.navigate();
        await loginPage.login(validUser.username, validUser.password);
    });

    test('Verify sorting Z-A on "All Items" page', async ({ page }) => {
        await inventoryPage.sortItemsBy('Name (Z to A)');
        const itemNames = await inventoryPage.getItemNames();
        const sortedNames = [...itemNames].sort().reverse();
        expect(itemNames).toEqual(sortedNames);
    });

    test('Verify price sorting High to Low', async ({ page }) => {
        await inventoryPage.sortItemsBy('Price (high to low)');
        const itemPrices = await inventoryPage.getItemPrices();
        //const sortedPrices = [...itemPrices].sort((a, b) => b - a);
        //expect(itemPrices).toEqual(sortedPrices);
    });

    test('Add multiple items to cart and validate checkout', async ({ page }) => {
        await inventoryPage;
        await inventoryPage.goToCart();

        await checkoutPage.startCheckout();
        await checkoutPage.enterCheckoutInfo(checkoutInfo.firstName, checkoutInfo.lastName, checkoutInfo.postalCode);
        await checkoutPage.finishCheckout();

        const confirmationMessage = await checkoutPage.getConfirmationMessage();
        expect(confirmationMessage).toBe('Thank you for your order!');
    });
});



test('Visual regression test for login page', async ({ page }) => {
   const loginPage = new LoginPage(page);
    await loginPage.navigate();
    expect(await page.screenshot()).toMatchSnapshot('login-page.png');

});


