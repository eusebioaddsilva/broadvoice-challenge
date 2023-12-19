describe('Scenario 6 - website leya', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.acceptCookies()
  });
  it('should validate the navigation sidebar', () => {
    cy.get('img[src="/assets/images/logo.png"]').should('be.visible')
    cy.get('i.icon-hamburguer').should('be.visible').click();
    const expectedTexts = ['Livros', 'Ebooks', 'Livros Escolares', 'Apoio Escolar', 'Acessos Digitais', 'Leya Express', 'Kobo+e_Leya'];
    cy.validateTextsInList('offcanvas-menu-item', expectedTexts)
  })
})