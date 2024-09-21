export function goToApp() {

    cy.visit('http://practice.automationtesting.in')

}

export function menuOptions(option: string) {

    cy.get('.main-nav').should('be.visible')

    cy.get('.main-nav').contains(option).click()

}