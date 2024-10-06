export function assertionItemsAddedToCart(products: string | string[]) {

    const productsArray = Array.isArray(products) ? products : [products]

    const itemCount = productsArray.length

    const itemLabel = itemCount === 1 ? 'item' : 'items'

    cy.get('.cartcontents').should('contain', `${itemCount} ${itemLabel}`)

}
