

beforeEach(() => {
    cy.visit('https://devfinance-agilizei.netlify.app/');
});

describe('Transações Dev Finance', () => {
    it('Entrada de transação', () => {
        cy.depositar('Depósito 100', 100, '2023-10-01'); 

        cy.get("tbody tr td.description").should('have.text', 'Depósito 100');      
    });
    it('Saida de transação', () => {
        cy.depositar('Cinema', -40, '2023-10-02');
        cy.get("tbody tr td.description").should('have.text', 'Cinema');    
    });
    it('Excluir transação', () => {
        cy.depositar('Depósito 1', 100, '2023-10-01'); 
        cy.depositar('Depósito 2', 100, '2023-10-01'); 
        cy.depositar('Depósito 3', 100, '2023-10-10'); 
        cy.depositar('Depósito 4', 100, '2023-10-02'); 
        cy.sacar('Depósito 3');

        cy.get("tbody tr").should('have.length', 3);
    });
});
