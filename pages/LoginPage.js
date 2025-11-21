import { expect } from '@playwright/test';
import CommonActions from '../utils/CommonActions.js';

export default class LoginPage{
    constructor(page){
        this.page = page;
        this.commonactions = new CommonActions(page);
        this.usernameLocator = '#username';
        this.passwordlocator = '#password';
        this.buttonLocator = 'button[type = "submit"]';
    }
    async navigate(){
        await this.commonactions.navigateUrl('https://the-internet.herokuapp.com/login');
    }
//     async assertLoginHeadingVisible() {
//         const heading = this.page.getByRole('heading', { name: 'Login Page' });
//         await heading.waitFor({ state: 'visible' }); // wait until visible
//         await expect(heading).toBeVisible();        // assert visible
//     }
//     async assertLoginDescriptionVisible() {
//         const heading = this.page.getByRole('heading', { level: 4 }).filter({ hasText: 'log into the secure area' });

//         await expect(heading).toBeVisible();
// } 
    async login(username, password){
        await this.commonactions.fillElement(this.usernameLocator, username);
        await this.commonactions.fillElement(this.passwordlocator, password);
        await this.commonactions.clickElement(this.buttonLocator);
    }

}