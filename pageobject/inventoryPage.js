class InventoryPage {
    constructor(page) {
        this.page = page;
        this.sortDropdown = page.locator('.product_sort_container');
        this.inventoryItems = page.locator('.inventory_item');
        this.product1=page.locator("#add-to-cart-sauce-labs-fleece-jacket");
        this.product2=page.locator("#add-to-cart-sauce-labs-bolt-t-shirt");
    }

    async sortItemsBy(optionText) {
        await this.sortDropdown.selectOption({ label: optionText });
    }

    async getItemNames() {
        return await this.inventoryItems.locator('.inventory_item_name').allTextContents();
    }

    async getItemPrices() {
        const prices = await this.inventoryItems.locator('.inventory_item_price').allTextContents();
        return prices.map(price => parseFloat(price.replace('$', '')));
    }

    async addItemsToCart() {
        

          await this.product1.click();
          await this.product2.click();

    }

    async goToCart() {
        await this.page.locator('.shopping_cart_link').click();
    }
}
module.exports = { InventoryPage };
