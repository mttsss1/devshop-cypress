import { goToApp, menuOptions } from "../support/actions/Default.actions"
import { addProductsToCart } from "../support/actions/Shop.actions"
import { assertionItemsAddedToCart } from "../support/assertions/Shop.assertions"

describe('Dado que necessito adicionar produtos no carrinho', () => {

    beforeEach(() => {

        goToApp()

        menuOptions('Shop')

    })

    context('Quando adicionar somente um produto desejado', () => {

        it('Então deverá ser adicionado no carrinho e contabilizado', () => {

            addProductsToCart('Android Quick Start Guide')

            assertionItemsAddedToCart('Android Quick Start Guide')

        })

    })

    context('Quando adicionar mais de um produto desejado', () => {

        const products = ['Android Quick Start Guide', 'Functional Programming in JS']

        it('Então deverá ser adicionado no carrinho e contabilizado', () => {

            addProductsToCart(products)

            assertionItemsAddedToCart(products)

        })

    })


})
