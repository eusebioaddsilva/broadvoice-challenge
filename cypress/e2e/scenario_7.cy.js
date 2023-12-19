describe('Scenario 7 - website leya', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.acceptCookies()
  });
  it('should search for a book and validate if its possible to share it via social media', () => {
    cy.get('img[src="/assets/images/logo.png"]').should('be.visible')
    cy.fixture('books.json').then((data) => {
      cy.searchBook(data.book_title_scenario_7)
      cy.get('.book-title').contains(data.book_title_scenario_7).should('exist').click()
      cy.wait(1000)
      cy.get('.add-to-favorite[data-bs-toggle="dropdown"]').first().within(() => {
        cy.get('i.icon-partilha').should('be.visible').click()
      })
      const expectedTexts = ['Facebook', 'WhatsApp'];
      cy.validateTextsInList('banner-wishlist', expectedTexts)
    })
  })
})