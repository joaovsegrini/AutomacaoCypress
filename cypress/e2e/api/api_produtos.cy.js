let token;

describe('Deve realizar login e cadastrar produto.', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.api_login('fulano@qa.com', 'teste').then((response)=>{
            expect(response.status).to.equal(200);
            expect(response.body.message).to.equal('Login realizado com sucesso');

            token = response.body.authorization;
        })
    });

    it('Deve cadastrar um produto com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/produtos',
            headers:{
                authorization: token
            },
            body: {
                "nome": "Carro BYD7",
                "preco": 470,
                "descricao": "Descrição do produto",
                "quantidade": 5
            }
        }).then((response)=>{
            expect(response.status).to.equal(201);
            expect(response.body.message).to.equal('Cadastro realizado com sucesso');
        })
        
    });
    
});