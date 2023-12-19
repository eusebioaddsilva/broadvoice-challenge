describe('Scenario 4 - website leya', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.acceptCookies()
  });
  it('should search for a book, add to basket and validate if the number in the basket is set to "1"', () => {
    cy.get('img[src="/assets/images/logo.png"]').should('be.visible')
    cy.fixture('books.json').then((data) => {
      cy.searchBook(data.book_title_scenario_2)
      cy.get('.book-title').contains(data.book_title_scenario_2).should('exist').click()
      cy.validateAuthor('GEORGE ORWELL')
      cy.addToBasket()
      cy.get('.add-to-cart').within(() => {
        cy.get('a[data-tag="1"]').should('be.visible')
      })
    })
  })
})