import allureReporter from "@wdio/allure-reporter";
import { expect } from "chai";
import { addDescription, addFeature } from "../util/allure-util";
import HomePage from "../core/pages/home-page";

describe('User ', async () => {
    it('can be opened', async () => {
        addFeature("User can open site.")
        addDescription("User is able to open the site");
        await browser.navigateTo("https://rozetka.com.ua/ua/");
    }),

        it('can search for the item', async () => {
            addFeature("User can open site.")
            addDescription("Verify that user is able to search for item \
            and searched term is displayed in the title.")

            let item = "samsung galaxy s22";
            let homePage = await new HomePage().open();
            let header = await homePage.getHeader();
            let searchResultPage = await header.searchForItem("samsung galaxy s22");
            let title = await searchResultPage.getSearchResultTitle();

            expect(title).to.contain(item, 'Title of the search result page should contain seacrched term');
        })
})