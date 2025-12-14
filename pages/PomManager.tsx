import LoginPage from './Login';
import { Page } from '@playwright/test';

export default class PomManager {
    page: Page;
    loginPage: LoginPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
    }
}