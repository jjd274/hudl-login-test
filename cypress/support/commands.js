import CONFIG from '../../config';

Cypress.Commands.add( 'goToWebsite', ( customDomain ) => {

    cy.visit(customDomain || CONFIG.WR_TEST_DOMAIN);

});

