export function assertionRegisterSuccess(email: string) {

    const formattedEmail = email.split('@')[0]

    cy.get('.woocommerce-MyAccount-content').should('contain', 'Hello ' + formattedEmail)

}

export function assertionEmptyInput(alert: string) {

    cy.get('.woocommerce-error').should('contain', alert)

}