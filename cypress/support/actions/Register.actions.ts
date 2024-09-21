export function fillRegister(email: string, password: string) {

    fillRegisterEmail(email)
    fillRegisterPassword(password)
    buttonRegister()

}

export function fillRegisterEmail(email: string) {

    cy.get('.register input[type="email"]').type(email)

}

export function fillRegisterPassword(password: string) {

    cy.get('.register input[type="password"]').type(password)

}

export function buttonRegister() {

    cy.get('input[name="register"]').should('be.visible')

    cy.get('input[name="register"]').click()

}