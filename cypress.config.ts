import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        supportFile: 'cypress/support/index.ts',
        "viewportWidth": 1440,
        "viewportHeight": 900,
        setupNodeEvents(on, config) {


        },
        specPattern: "cypress/e2e/**/*.spec.{ts,tsx}",
    },
});