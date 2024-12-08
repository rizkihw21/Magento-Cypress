// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
    cy.fixture('example').then((validuser) => {
        cy.contains('a', 'Sign In').click();
        cy.get('.email').type('rizkikiri25@gmail.com');
        cy.get('#pass').type('No123456');
        cy.get('#send2').click();    
    })
});

Cypress.Commands.add('invalidlogin', (email, password) => {
    cy.fixture('example').then((invaliduser) => {
        cy.contains('a', 'Sign In').click();
        cy.get('.email').type('rizkikiri00@gmail.com');
        cy.get('#pass').type('No123456');
        cy.get('#send2').click();            
    })
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })