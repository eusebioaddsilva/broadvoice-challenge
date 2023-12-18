describe('Scenario 5 - website leya', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.acceptCookies()
  });

  it('should change from light mode to dark mode', () => {
    cy.get('img[src="/assets/images/logo.png"]').should('be.visible')
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('#darkmode').should('be.visible').click()
    cy.get('body').should('have.css', 'background-color', 'rgb(30, 31, 30)');
  })
})