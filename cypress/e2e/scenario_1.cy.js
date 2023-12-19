describe('Scenario 1 - website leya', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.acceptCookies()
  });
  it('should search for a book and validate his description', () => {
    cy.get('img[src="/assets/images/logo.png"]').should('be.visible')
    cy.fixture('books.json').then((data) => {
      cy.searchBook(data.book_author_scenario_1)
      cy.get('.book-title').contains(data.book_title_scenario_1).should('exist').click()
      cy.get('section.sinopse').contains('Quinta Manor').should('be.visible')
    })
  })
})