export function addProductsToCart(products: string | string[]) {

    const productsArray = Array.isArray(products) ? products : [products]


    productsArray.forEach(product => {

        cy.contains(product).closest('li.product').find('a.add_to_cart_button').click()

        cy.wait(500)

    })

}
