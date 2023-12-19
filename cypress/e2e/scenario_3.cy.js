describe('Scenario 3 - website leya', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.acceptCookies()
  });
  it('should search for a book and validate that it has the same author as "A Quinta dos Animais"', () => {
    cy.get('img[src="/assets/images/logo.png"]').should('be.visible')
    cy.fixture('books.json').then((data) => {
      cy.searchBook(data.book_title_scenario_2)
      cy.get('.book-title').contains(data.book_title_scenario_2).should('exist').click()
      cy.validateAuthor('GEORGE ORWELL')
      cy.checkBookTitle(data.book_title_scenario_3)
    })
  })
})