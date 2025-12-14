import CommonActions from '../utils/CommonActions.tsx';
import Credentials from '../test-data/credentials.tsx';
import { Page } from '@playwright/test';

export default class Login{
    actions: CommonActions; 

    constructor(page: Page) {
        this.actions = new CommonActions(page);
    }

    async validSignIn(){
        // await this.actions.page.navigate(url); --> will add to beforeEach hook
        await this.actions.fill('#user-name', Credentials.validUserNames.standard);
        await this.actions.fill('#password', Credentials.password);
    }

    async invalidSignIn() {
        await this.actions.fill('#user-name', Credentials.generateInvalidCredentials().username);
        await this.actions.fill('#password', Credentials.generateInvalidCredentials().password);
    }

    
}