import allureReporter from '@wdio/allure-reporter';
import { addStep } from '../../util/allure-util';
import { waitForDisplayedAndGet } from '../../util/webelement-util';
import SearchResultPage from "../pages/search-result-page";
import CartModal from "./cart-modal";

export default class Header {

    async searchForItem(item: string) {
        addStep(`Searched for '${item}'`);
        let searchBarElement = await waitForDisplayedAndGet("//input[@name='search']");
        await searchBarElement.setValue(item);

        let searchButtonElement = await waitForDisplayedAndGet("//form[contains(@class,'search-form')]/button");
        await searchButtonElement.click();
        await waitForDisplayedAndGet("//div[contains(@class, 'goods-tile')]");

        return new SearchResultPage();
    }

    async openCartModal() {
        addStep("Opened cart modal window");
        let cartModalElement = await waitForDisplayedAndGet("//button[@opencart]");
        await cartModalElement.click();

        return new CartModal();
    }

    async getCartItemAmount() {
        addStep("Retrieved cart item amount");
        let counterElement = await waitForDisplayedAndGet("//span[contains(@class,'counter')]");

        return await counterElement.getText();
    }
}