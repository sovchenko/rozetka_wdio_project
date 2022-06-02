import { waitForDisplayedAndGet } from '../../util/webelement-util';

export default class CartModal {

    async getCartItemTitle() {
        let cartItemTitle = await waitForDisplayedAndGet("//a[@class='cart-product__title']");

        return await cartItemTitle.getText();
    }

    async getCartItemPrice() {
        let cartItemPrice = await waitForDisplayedAndGet("//p[@class='cart-product__price']");
        let price = await cartItemPrice.getText();

        return price.replace(/\D/g, "");
    }
}