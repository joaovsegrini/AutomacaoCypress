

  Cypress.Commands.add('depositar',(descricao, valor, data)=>{
    cy.get('#transaction .button').click();
    cy.get('#description').type(descricao);
    cy.get('#amount').type(valor);
    cy.get('#date').type(data);
    cy.contains('button', 'Salvar').click();
  })

  Cypress.Commands.add('sacar',(descricao)=>{
    cy.contains(".description", descricao)
        .parent()
        .find('img')
        .click();
  })



