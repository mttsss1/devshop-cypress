Cypress.on('uncaught:exception', (err: Error, runnable: Mocha.Runnable) => {
    return false;
});
