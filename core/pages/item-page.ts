import CartModal from "../elements/cart-modal";
import '../../util/webelement-util'
import { waitForClickableAndGet, waitForDisplayedAndGet } from "../../util/webelement-util";
import { addIssue, addStep } from "../../util/allure-util";
import AllureReporter from "@wdio/allure-reporter";

export default class ItemPage {

    async addItemToCart() {
        addStep("Added item to cart");
        let cartButton = await waitForClickableAndGet("//button[contains(@class, 'buy-button')]");
        await cartButton.click();

        return new CartModal();
    }

    async getItemPrice() {
        addStep("Retrieved cart item price");
        let itemPriceElement = await waitForDisplayedAndGet("//p[@class='product-prices__big']");
        let price = await itemPriceElement.getText();

        return price.replace(/\D/g, "");
    }

    async getItemTitle() {
        addStep("Retrieved cart item title");
        let itemTitleElement = await waitForDisplayedAndGet("//h1[@class='product__title']");

        return await itemTitleElement.getText();
    }
}