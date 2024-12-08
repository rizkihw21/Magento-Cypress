describe ('Edit profile', () => {    
    it('Edit profile', () => {
        cy.visit('/')
        cy.login('email', 'password')

        //Edit profile
        // cy.get('.customer-menu').click({ multiple: true });
        cy.get('button[data-action="customer-menu-toggle"]').click({ multiple: true, force: true });
        // Klik untuk membuka menu

        cy.contains('a', 'My Account').click({force: true});

        cy.contains('a', 'Edit').click({force: true});
        cy.get('#firstname').type(Randomname);



    })
})