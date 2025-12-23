import { Page } from '@playwright/test';

export default class Homepage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getMainPageHeader() {
        return this.page.locator('div.app_logo');
    }

    getMenuIcon() {
        return this.page.locator('button#react-burger-menu-btn');
    }

    getCartButton() {
        return this.page.locator
    }

    async Logout() {
        const menu_button = this.page.locator('button#react-burger-menu-btn');
        const logout_link = this.page.getByRole('button', { name: 'Logout' })

        await menu_button.click();
        await logout_link.click();
    }
}