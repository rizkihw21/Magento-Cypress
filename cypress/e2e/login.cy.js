import './commands';

describe('Login Test with valid credentials', () => {
    it('should login successfully', () => {
      cy.visit('/');
      cy.login('email', 'password');

      // Assertion text
      cy.get('.logged-in').should('have.text', 'Welcome, Rizki Hernawan!Welcome, Rizki Hernawan!');
    });
  });

  describe('Login Test with invalid credentials', () => {
    it('should display error message', () => {
      cy.visit('/');
      cy.invalidlogin('invalid_email@example.com', 'wrong_password'); 

      // Assertion text
      cy.get('div[data-ui-id="message-error"]').should('have.text', '\n            The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.\n        ');        
    }); 
  })