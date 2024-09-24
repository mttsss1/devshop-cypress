import { defineConfig } from "cypress";

require('dotenv').config()

export default defineConfig({
    env: { ...process.env },
    e2e: {
        supportFile: 'cypress/support/index.ts',
        "viewportWidth": 1440,
        "viewportHeight": 900,
        setupNodeEvents(on, config) {


        },
        specPattern: "cypress/e2e/**/*.spec.{ts,tsx}",
    },
});