import { Page } from '@playwright/test';

export default class Login{
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async signIn(username: string, password: string){
        await this.page.fill('#user-name', username);
        await this.page.fill('#password', password);
        await this.page.click('#login-button');
    }

    getErrorMessage(){
        return this.page.locator('h3[data-test="error"]');
    }
}