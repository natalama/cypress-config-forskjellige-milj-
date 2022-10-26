const { defineConfig } = require("cypress");

const fs = require("fs-extra");
const path = require("path");

const hentKonfigFraMiljo = file => {
  const pathOfConfigurationFile = `config/cypress.${file}.json`;
  return (
      file && fs.readJson(path.join(__dirname, pathOfConfigurationFile))
  );
};


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const environment = config.env.miljo || "stm";
      //hent config basert på miljø
      const configurationForEnvironment = hentKonfigFraMiljo(environment);
      return configurationForEnvironment || config;
    },
  },
});
