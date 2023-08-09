import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    baseUrl: "http://localhost:3000/",
  },
  e2e: {
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
