import PomManager from "../../pages/PomManager";
import Credentials from "../../test-data/Credentials";
import { test, expect } from '@playwright/test';

let pm: PomManager;

test.describe('Login Tests', {tag: '@smoke'}, () => {
    

    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page);
        await pm.loginPage.navigate('https://www.saucedemo.com/');
    })
    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test('Happy Path Login', async () => {
        const username = Credentials.validUserNames.standard;
        const password = Credentials.password;
        
        await pm.loginPage.signIn(username, password);

        const menuButton = pm.homePage.getMenuButton();

        await expect(menuButton).toBeVisible();
    })

    test('Invalid Sign In', async () => {
        const {username, password} = Credentials.generateInvalidCredentials();

        await pm.loginPage.signIn(username, password);
        const messageBox = pm.loginPage.getErrorMessage();

        await expect(messageBox).toBeVisible();
        await expect(messageBox).toContainText('Username and password do not match any user in this service');
    })
})
