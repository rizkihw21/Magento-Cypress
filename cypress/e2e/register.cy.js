describe('Create an Account', () => {
    it('Visit Website Page', () => {
        const randomEmail = `test${Math.random().toString(36).substring(7)}@gmail.com`;

        // Masuk ke dalam website
        cy.visit('/customer/account/create/');
        cy.title().should('eq', 'Create New Customer Account');
        
        // Input form register
        cy.get('#firstname').type('Rizki'); // Selector unik
        cy.get('#lastname').type('Hernawan');
        cy.get('#email_address').type(randomEmail);
        cy.get('#password').type('No123456');
        cy.get('#password-confirmation').type('No123456');
        
        // Klik tombol create an account
        cy.contains('button', 'Create an Account').click();

        //Assertion text
        // cy.get('div[data-ui-id="message-success"]').should('have.text', '\n            Thank you for registering with Main Website Store.\n        ');

        cy.get('div[data-ui-id="message-success"]')
        .should('be.visible')
        .and('contain', '\n            Thank you for registering with Main Website Store.\n        ');
    });
});

describe('Invalid Register with same account', () => {
    it('Visit Website Page', () => {
        // Masuk ke dalam website
        cy.visit('/customer/account/create/');
        cy.title().should('eq', 'Create New Customer Account');
        
        // Input form register
        cy.get('#firstname').type('Rizki'); // Selector unik
        cy.get('#lastname').type('Hernawan');
        cy.get('#email_address').type('rizkikiri25@gmail.com');
        cy.get('#password').type('No123456');        
        cy.get('#password-confirmation').type('No123456');
        
        // Klik tombol create an account
        cy.contains('button', 'Create an Account').click();

        //Assertion text
        cy.get('div[data-ui-id="message-error"]').should('have.text', '\n            There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.\n        ');
    });
});
