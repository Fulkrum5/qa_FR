///Autorization by token  
describe('This spec contain auth and filling data for payment', () => {
    it('AUTH', () => {
        cy.visit("https://finance.dev.fabrique.studio/accounts/login/", {
            headers: {
                authorization: 'Basic ZmFicmlxdWU6ZmFicmlxdWU='
            },

        })
        ///Login in
        cy.get('input[type="email"]')
            .type('admin@admin.ad').should('have.value', 'admin@admin.ad')
        cy.get('input[type="password"]')
            .type('admin').should('have.value', 'admin')
        cy.get('button[type="submit"]').click()
    })
})