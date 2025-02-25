//import { Given, then, Then, And, and } from 'cypress-cucumber-preprocessor/steps';
import { Given, When, when, then, Then} from '@badeball/cypress-cucumber-preprocessor';
import CONFIG from '../../../../config';

// Log in to Hudl
Given('I am on a {string}', (URL) => {
    cy.viewport(1536, 960)
    cy.visit(URL, {
    });
    
});

When('I click login button in nav', () => {
    cy.get(CONFIG.NAV_LOGIN).first().click({ force: true });
    cy.get(CONFIG.HUDL_LOGIN).first().click({ force: true });
});

Then('I am navigated to a login page', () => {
    cy.contains('Log In')
    cy.get(CONFIG.HUDL_USERNAME).should('be.visible');
    cy.get(CONFIG.HUDL_GOOGLE_LOGIN).should('be.visible');
    cy.get(CONFIG.HUDL_FACEBOOK_LOGIN).should('be.visible');
    cy.get(CONFIG.HUDL_APPLE_LOGIN).should('be.visible');

});
//Happy flow login test - can be used as prerequsit for other tests
When ('I login as {string}', (User) => {
    cy.get(CONFIG.HUDL_USERNAME).click();
    cy.get(CONFIG.HUDL_USERNAME).type(User);1
    cy.get(CONFIG.HUDL_CONT).click();
    cy.get(CONFIG.HUDL_PASSWORD).click();
    cy.get(CONFIG.HUDL_PASSWORD).type(CONFIG.DATA_PASSWORD)
    cy.get(CONFIG.HUDL_CONT).click();
});
//Breakdown into pages - login
When ('I enter login details {string}', (User) => {
    cy.get(CONFIG.HUDL_USERNAME).click();
    cy.get(CONFIG.HUDL_USERNAME).type(User);
    cy.get(CONFIG.HUDL_CONT).click();
});

Then('I am am navigated to password page', () => {
    cy.get(CONFIG.HUDL_PASSWORD).should('be.visible')
});


When ('I enter password', (User) => {
    cy.get(CONFIG.HUDL_PASSWORD).click();
    cy.get(CONFIG.HUDL_PASSWORD).type(CONFIG.PASSWORD)
    cy.get(CONFIG.HUDL_CONT).click();
});

Then('I am logged in successfully', () => {
    cy.get(CONFIG.HUDL_NAV_USERNAME).should('be.visible')
});


When('I click on forgot your password link', () => {
    cy.get(CONFIG.HUDL_FORGOT_PASSWORD).click();
    });

When('I enter email address {string}', (User) => {
    cy.get(CONFIG.HUDL_USERNAME).type(User);
});
When('I click submit', () => {
    cy.get(CONFIG.KC_REQUEST_PASSWORD).click();

});
Then('invalid username error is displayed', () => {
    cy.wait(1000);
    cy.get(CONFIG.HUDL_USERNAME_ERROR).should('be.visible')
    cy.contains("Enter a valid email.")
});

Then('invalid email or password error is displayed', () => {
    cy.wait(1000);
    cy.get(CONFIG.HUDL_CREDENTIALS_ERROR).should('be.visible')
    //cy.contains("Your email or password is incorrect. Try again.")
});

Then ('message {string} is displayed', (Message)=> {
    cy.contains ((Message))
});

Then('I am navigated to Reset Password page', () => {
    cy.contains('Reset Password')
    cy.contains("We'll send you a link to reset your password.")
});
Then('Your username or password was incorrect message is displayed', () => {
    cy.get(CONFIG.HUDL_CREDENTIALS_ERROR).should('be.visible');
});

When('I login as {string} with an invalid credentials', (User) => {
    cy.get(CONFIG.HUDL_USERNAME).type(User);
    cy.get(CONFIG.HUDL_CONT).click();
    cy.get(CONFIG.HUDL_PASSWORD).type(CONFIG.DATA_INVALID_PASSWORD);
    cy.get(CONFIG.HUDL_CONT).click();
});

When ('I edit my username', () => {
    cy.get(CONFIG.HUDL_EDIT_USERNAME).click();
});

When ('I click on Google login', () => {
    cy.get(CONFIG.HUDL_GOOGLE_LOGIN).click({ multiple: true } );
});

Then ('I am navigated to Google login page', () => {
    cy.origin((CONFIG.DATA_GOOGLE_URL), () => {
    cy.url().should('contain', (CONFIG.DATA_GOOGLE_URL));
})
});

When ('I click the logout button', () => {
    cy.get(CONFIG.HUDL_GLOBAL_NAV).invoke('show');
    cy.get(CONFIG.HUDL_NAV_LOGOUT).click({force:true, multiple: true });
});
Then ('I am successfully logged out', () => {
    cy.get(CONFIG.NAV_LOGIN).should('be.visible');
    cy.get(CONFIG.HUDL_NAV_USERNAME).should('not.be.visible'); 
});

//Happy flow login test - can be used as prerequsit for other tests
When ('I am logged in to Hudl as {string}', (User) => {
    cy.get(CONFIG.NAV_LOGIN).first().click({ force: true });
    cy.get(CONFIG.HUDL_LOGIN).first().click({ force: true });
    cy.wait(1000);
    cy.get(CONFIG.HUDL_USERNAME).click();
    cy.get(CONFIG.HUDL_USERNAME).type(User);
    cy.get(CONFIG.HUDL_CONT).click();
    cy.get(CONFIG.HUDL_PASSWORD).click();
    cy.get(CONFIG.HUDL_PASSWORD).type(CONFIG.DATA_PASSWORD)
    cy.get(CONFIG.HUDL_CONT).click();
    cy.wait(1000);
    cy.get(CONFIG.HUDL_NAV_USERNAME).should('be.visible')
});