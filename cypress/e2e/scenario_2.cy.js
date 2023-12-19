describe('Scenario 2 - website leya', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.acceptCookies()
  });
  it('should search for a book and validate details in the description', () => {
    cy.get('img[src="/assets/images/logo.png"]').should('be.visible')
    cy.fixture('books.json').then((data) => {
      cy.searchBook(data.book_title_scenario_2)
      cy.get('.book-title').contains(data.book_title_scenario_2).should('exist').click()
      cy.validateAuthor('GEORGE ORWELL')
      cy.validateBookDetails('ISBN', '9789722071550')
      cy.validateBookDetails('Páginas', '344')
      cy.validateBookDetails('Dimensões', '235 x 157 x 23 mm')
    })
  })
})