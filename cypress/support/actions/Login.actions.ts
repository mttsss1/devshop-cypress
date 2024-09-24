export function fillLogin(email: string, password: string) {

    fillLoginEmail(email)
    fillLoginPassword(password)
    buttonLogin()

}

export function fillLoginEmail(email: string) {

    cy.get('.login input[name="username"]').should('be.visible')

    cy.get('.login input[name="username"]').type(email)

}

export function fillLoginPassword(password: string) {

    cy.get('.login input[type="password"]').should('be.visible')

    cy.get('.login input[type="password"]').type(password)

}

export function buttonLogin() {

    cy.get('input[name="login"]').should('be.visible')

    cy.get('input[name="login"]').click()

}