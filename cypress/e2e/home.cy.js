describe('Home Page', () => {
  it('displays a message when the button is clicked', () => {
    // Visit the homepage
    cy.visit('http://localhost:3000/');

    // Check that the message is not visible initially
    cy.get('#message').should('not.be.visible');

    // Click the button
    cy.get('#click-me').click();

    // Check that the message is now visible
    cy.get('#message').should('be.visible');
  });
});
