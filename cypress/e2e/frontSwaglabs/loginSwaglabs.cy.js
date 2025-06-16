
beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
});
describe('Login válido', () => {
    it('Realizar login com credenciais inválidas', () => {
        cy.loginSwaglabs('standard_user', 'senha_incorreta');
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });
    it('Realizar login com sucesso', () => {
        cy.loginSwaglabs('standard_user', 'secret_sauce');
        cy.get('.product_label').should('have.text', 'Products');
    });
    it('Adicionar produto ao carrinho', () => {
        cy.loginSwaglabs('standard_user', 'secret_sauce');
        cy.adicionarCarrinho('Sauce Labs Backpack');
    });
    it('Remover produto do carrinho', () => {
        cy.loginSwaglabs('standard_user', 'secret_sauce');
        cy.adicionarCarrinho('Sauce Labs Backpack');
        cy.removerDoCarrinho('Sauce Labs Backpack');
    });
});