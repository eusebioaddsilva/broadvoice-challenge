Cypress.Commands.add('acceptCookies', () => {
    cy.wait(1000)
    cy.get('#cookiescript_accept').click();
})

Cypress.Commands.add('searchBook', (bookName) => {
    cy.get('.search-bar').within(() => {
        cy.get('#searchbar-large').type(bookName + '{enter}')
    });
})

Cypress.Commands.add('validateAuthor', (author) => {
    cy.get('section.author').within(() => {
        cy.contains(author).should('be.visible')
    });
})

Cypress.Commands.add('validateBookDetails', (label, expectedValue) => {
    cy.get('div._sinpose-address ul li')
      .contains(label)
      .invoke('text')
      .then((actualText) => {
        const cleanedActualText = actualText.trim().replace(/\s+/g, ' ');
        const cleanedExpectedValue = expectedValue.trim().replace(/\s+/g, ' ');
        expect(cleanedActualText).to.equal(`${label}: ${cleanedExpectedValue}`);
      });
  });

  Cypress.Commands.add('checkBookTitle', (title) => {
    cy.get('section.similar-books')
      .find('.book-card-container h6.book-title')
      .should('contain.text', title);
  });

  Cypress.Commands.add('addToBasket', () => {
    cy.get('.choose-op-item.book h5')
      .contains('LIVRO')
      .siblings('a.more.buy-button')
      .click();
  });