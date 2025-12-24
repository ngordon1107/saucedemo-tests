import { Page } from '@playwright/test';

export default class Homepage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getMainPageHeader() {
        return this.page.locator('div.app_logo');
    }

    getMenuButton() {
        return this.page.getByRole('button', { name: 'Open Menu' });
    }

    getCartButton() {
        return this.page.locator
    }

    async Logout() {
        const menu_button = this.getMenuButton();
        await menu_button.click();
        
        // Wait for menu to open and logout link to be visible
        const logout_link = this.page.getByRole('link', { name: 'Logout' });
        await logout_link.waitFor({ state: 'visible' });
        await logout_link.click();
    }
}