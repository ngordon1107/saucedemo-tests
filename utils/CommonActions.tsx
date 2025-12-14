import { Page } from '@playwright/test';

export default class CommonActions {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate (url) {
        await this.page.goto(url)
    }

    async click(selector) {
        await this.page.click(selector);
    }

    async fill(selector, text) {
        await this.page.fill(selector, text);
    }

};
