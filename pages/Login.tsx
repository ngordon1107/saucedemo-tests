import { Page } from '@playwright/test';

export default class Login{
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Getters
    getUsernameInput () {
        return this.page.locator('#user-name');
    }

    getPasswordInput () {
        return this.page.locator('#password');
    }

    getLoginButton () {
        return this.page.getByRole('button', { name: 'Login' });
    }

    // Actions
    async navigate(url: string) {
        await this.page.goto(url);
    }

    async signIn(username: string, password: string){
        await this.getUsernameInput().fill(username);
        await this.getPasswordInput().fill(password);
        await this.getLoginButton().click();
    }

    getErrorMessage(){
        return this.page.locator('h3[data-test="error"]');
    }
}