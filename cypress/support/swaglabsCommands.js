Cypress.Commands.add('loginSwaglabs', (username, password) => {
        cy.get('[data-test="username"]').type(username);
        cy.get('[data-test="password"]').type(password);
        cy.get('#login-button').click();
});

Cypress.Commands.add('adicionarCarrinho', (produto) => {
        cy.get('#item_4_title_link > .inventory_item_name').should('have.text', produto);
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
});

Cypress.Commands.add('removerDoCarrinho', (produto) => {
        cy.get('.fa-layers-counter').click();
        cy.get('.inventory_item_name').should('have.text', produto);
        cy.get('.item_pricebar > .btn_secondary').click();
});