import { faker } from '@faker-js/faker'

import { goToApp, menuOptions } from "../support/actions/Default.actions"
import { buttonRegister, fillRegister, fillRegisterEmail, fillRegisterPassword } from "../support/actions/Register.actions"
import { assertionEmptyInput, assertionPasswordTypeInput, assertionSuccess } from "../support/assertions/Default.assertions"

describe('Dado que necessito criar uma conta', () => {

    let userEmail
    let userPassword

    beforeEach(() => {

        userEmail = faker.internet.email()
        userPassword = faker.internet.password() + faker.science.chemicalElement()

        goToApp()

        menuOptions('My Account')

    })

    context('Quando eu adicionar meus dados e registrar', () => {

        it('Então deverá ser registrado com sucesso', () => {

            fillRegister(userEmail, userPassword)

            assertionSuccess(userEmail)

        })

    })

    context('Quando eu tentar criar uma conta sem senha', () => {

        it('Então deverá me retornar uma mensagem de erro', () => {

            fillRegisterEmail(userEmail)
            buttonRegister()

            assertionEmptyInput('Please enter an account password.')

        })

    })

    context('Quando eu tentar criar uma conta sem senha', () => {

        it('Então deverá me retornar uma mensagem de erro', () => {

            fillRegisterPassword(userPassword)
            buttonRegister()

            assertionEmptyInput('Please provide a valid email address.')

        })

    })

    context('Quando eu preciso verificar o input da senha é do tipo password', () => {

        it('Então ao digitar a senha, deverá verificar o atributo do input', () => {

            fillRegisterPassword(userPassword)

            assertionPasswordTypeInput('Register')

        })

    })

})
