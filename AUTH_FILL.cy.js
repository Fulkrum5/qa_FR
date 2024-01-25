///Autorization by token  
describe('This spec contain auth and filling data for payment', () => {
    it('AUTH AND FILL', () => {
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
        ///Filling the payment
        cy.get('button[class="button button--size-sm button--is-centered button--state-filled"]').click()
        cy.get('input[type = "textarea"],[style = "height: 80px; max-height: 80px;"]')
            .type('CREATED BY CYPRESS').should('have.value', 'CREATED BY CYPRESS')
        cy.get('[class="form-field radio-group__checkbox radio-group__checkbox--first"]').eq(1).click()
        cy.get('[class="form-field radio-group__checkbox radio-group__checkbox--last"]').eq(1).click()
        cy.get('input[class="input__input"]').eq(0)
            .type('100').should('have.value', '100')
        cy.get('input[class="input__input"]').eq(1)
            .type('100').should('have.value', '100')
        cy.get('[class="checkbox__label"]').eq(6).click()
        cy.get('[class="date date--is-short date--state-undefined"]').eq(0).click()
           // Now, assuming the calendar is displayed, you can click the "Сегодня" button
        cy.get('.dp-today').click();
        cy.get('[class="date date--is-short date--state-undefined"]').eq(1).click()
        cy.get('.dp-today').click()
        cy.get('[class="multiselect__tags"]').eq(0).click()
        cy.get('input[class="multiselect__input"]').eq(0)
            .type('CREATED BY CYPRESS{enter}')
        cy.get('[class="input input--size-md input--state-default"]').eq(1).click()
            .type('CREATED BY CYPRESS{enter}')
    })
})
////class="multiselect__tags"