import './commands';

// can be used for global functions
//npbeforeEach( () => {
//  cy.goToWebsite();
//} );

Cypress.on('uncaught:exception', () => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});