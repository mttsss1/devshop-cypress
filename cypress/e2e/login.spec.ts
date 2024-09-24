import { faker } from '@faker-js/faker'

import { goToApp, menuOptions } from "../support/actions/Default.actions"
import { assertionEmptyInput, assertionPasswordTypeInput, assertionSuccess } from "../support/assertions/Default.assertions"
import { buttonLogin, fillLogin, fillLoginEmail, fillLoginPassword } from '../support/actions/Login.actions'

describe('Dado que necessito entrar na minha conta', () => {

    let userEmail
    let userPassword

    beforeEach(() => {

        userEmail = faker.internet.email()
        userPassword = faker.internet.password() + faker.science.chemicalElement()

        goToApp()

        menuOptions('My Account')

    })

    context('Quando eu adicionar meus dados e entrar', () => {

        it('Então deverá logar com sucesso', () => {

            fillLogin(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))

            assertionSuccess(Cypress.env('EMAIL'))

        })

    })

    context('Quando eu adicionar dados inexistentes e tentar entrar', () => {

        it('Então deverá logar com sucesso', () => {

            fillLogin(userEmail, userPassword)

            assertionEmptyInput('A user could not be found with this email address.')
        })

    })

    context('Quando eu tentar entrar na conta sem senha', () => {

        it('Então deverá me retornar uma mensagem de erro', () => {

            fillLoginEmail(userEmail)
            buttonLogin()

            assertionEmptyInput(`Password is required.`)

        })

    })

    context('Quando eu tentar entrar na conta sem email ou user', () => {

        it('Então deverá me retornar uma mensagem de erro', () => {

            fillLoginPassword(userPassword)
            buttonLogin()

            assertionEmptyInput('Username is required.')

        })

    })

    context('Quando eu preciso verificar o input da senha é do tipo password', () => {

        it('Então ao digitar a senha, deverá verificar o atributo do input', () => {

            fillLoginPassword(userPassword)

            assertionPasswordTypeInput('Login')

        })

    })


})
