import LoginPage from './Login';
import Homepage from './Homepage';
import { Page } from '@playwright/test';

export default class PomManager {
    page: Page;
    loginPage: LoginPage;
    homePage: Homepage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.homePage = new Homepage(page);
    }
}