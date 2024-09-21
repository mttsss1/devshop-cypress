// Para TypeScript
Cypress.on('uncaught:exception', (err: Error, runnable: Mocha.Runnable) => {
    // Retorne false para impedir que o Cypress falhe o teste
    return false;
});
