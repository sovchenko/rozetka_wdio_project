import { addStep } from '../../util/allure-util';
import '../elements/header'
import Header from '../elements/header';

export default class HomePage {
    private homePageUrl: string = "https://rozetka.com.ua/ua/";

    async open() {
        addStep(`Opened home page ${this.homePageUrl}`);
        await browser.navigateTo(this.homePageUrl);
        return this;
    }

    async  getHeader(){
        return new Header();
    }
}