class CheckoutPage {
    constructor(page) {
        this.page = page;
    }

    async startCheckout() {
        await this.page.locator('#checkout').click();
    }

    async enterCheckoutInfo(firstName, lastName, postalCode) {
        await this.page.fill('#first-name', firstName);
        await this.page.fill('#last-name', lastName);
        await this.page.fill('#postal-code', postalCode);
        await this.page.locator('#continue').click();
    }

    async finishCheckout() {
        await this.page.locator('#finish').click();
    }

    async getConfirmationMessage() {
        return this.page.locator('.complete-header').textContent();
    }
}
module.exports = { CheckoutPage };
