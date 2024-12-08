class LoginPage {
    visit() {
      cy.visit("/login"); // Masuk ke halaman login
    }
  
    fillUsername(username) {
      cy.get('input[name="username"]').type(username);
    }
  
    fillPassword(password) {
      cy.get('input[name="password"]').type(password);
    }
  
    submit() {
      cy.get('button[type="submit"]').click();
    }
  }
  
  export default LoginPage;
  