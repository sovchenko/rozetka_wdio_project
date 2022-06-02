import { expect } from "chai";
import HomePage from "../core/pages/home-page"
import allureReporter from '@wdio/allure-reporter'
import { addFeature } from "../util/allure-util";

describe('Item', async () => {
    it('can be added to the cart', async () => {
        allureReporter.addDescription("Verifies that item can be added to the cart,\
         title and price in the cart should match title and price of the added item.", "text");
        addFeature("Cart feature");

        let item = "samsung galaxy s22";
        let homePage = await new HomePage().open();
        let header = await homePage.getHeader();
        let searchResultPage = await header.searchForItem(item);
        let itemPage = await searchResultPage.openItemPage(1);
        let itemTitle = await itemPage.getItemTitle();
        let itemPrice = await itemPage.getItemPrice();
        let cartModal = await itemPage.addItemToCart();
        expect(await header.getCartItemAmount()).to.be.equal("1");
        let cartItemTitle = await cartModal.getCartItemTitle();
        let cartItemPrice = await cartModal.getCartItemPrice();
        expect(itemTitle).to.be.equal(cartItemTitle);
        expect(itemPrice).to.be.equal(cartItemPrice);
    })
})