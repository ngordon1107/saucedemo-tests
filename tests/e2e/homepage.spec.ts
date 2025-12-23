import PomManager from "../../pages/PomManager";
import { test, expect } from '@playwright/test';

let pm: PomManager;

test.describe('Homepage Tests', () => {

    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page);
        await pm.loginPage.navigate('https://www.saucedemo.com/');
        await pm.loginPage.signIn;
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test('Logout', async () => {
        await pm.homePage.Logout(); 
        const usernameField = pm.loginPage.getUsernameInput();
        const passwordField = pm.loginPage.getPasswordInput();
        const loginButton = pm.loginPage.getLoginButton(); 

        await expect(usernameField).toContainText('Username');
        await expect(passwordField).toContainText('Password');
        await expect(loginButton).toContainText('Login');
    })
})