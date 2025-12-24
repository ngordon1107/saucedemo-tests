import PomManager from "../../pages/PomManager";
import Credentials from "../../test-data/Credentials";
import { test, expect } from '@playwright/test';

let pm: PomManager;

test.describe('Homepage Tests', () => {

    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page);
        await pm.loginPage.navigate('https://www.saucedemo.com/');
        await pm.loginPage.signIn(Credentials.validUserNames.standard, Credentials.password);
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

    test('Logout', async () => {
        await pm.homePage.Logout(); 
        const usernameField = pm.loginPage.getUsernameInput();
        const passwordField = pm.loginPage.getPasswordInput();
        const loginButton = pm.loginPage.getLoginButton(); 

        await expect(usernameField).toHaveAttribute('placeholder', 'Username');
        await expect(passwordField).toHaveAttribute('placeholder', 'Password');
        await expect(loginButton).toContainText('Login');
    });
})