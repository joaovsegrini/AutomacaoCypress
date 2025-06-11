Cypress.Commands.add('api_login', (email, password) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/login',
        body: {
                "email": email,
                "password": password
        },
        failOnStatusCode: false
    }).then((response)=>{
            return response
        })
})