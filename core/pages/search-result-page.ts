import  '../../util/webelement-util'
import ItemPage from './item-page';
import { waitForDisplayedAndGet } from '../../util/webelement-util';
import { addStep } from '../../util/allure-util';

export default class SearchResultPage {

    async getSearchResultTitle() {
        addStep("Retrieved get search result title")
        let titleElement = await waitForDisplayedAndGet("//h1[contains(@class,'catalog-heading')]");

        return titleElement.getText();
    }

    async openItemPage(itemIndex: number) {
        addStep("Opened item page")
        let itemElement = await browser.$$("//div[contains(@class, 'goods-tile')]");
        await itemElement[itemIndex].waitForDisplayed();
        await itemElement[itemIndex].click();
        let itemTitle = await itemElement[itemIndex].getText();
        // addStep(`Opened page of ${itemTitle}`);
        
        return new ItemPage();
    }
}