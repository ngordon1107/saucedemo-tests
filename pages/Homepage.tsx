import { Page } from '@playwright/test';

export default class Homepage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getMainPageHeader(){
        return this.page.locator('div.app_logo');
    }

    getMenuIcon(){
        return this.page.locator('button#react-burger-menu-btn');
    }
}