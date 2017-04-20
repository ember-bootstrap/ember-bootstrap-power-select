/* eslint-env node */
'use strict';

const rsvp = require('rsvp');
const fs = require('fs-extra');
const path = require('path');
const writeFile = rsvp.denodeify(fs.writeFile);
const BuildConfigEditor = require('ember-cli-build-config-editor');
const chalk = require('chalk');

module.exports = {
  description: '',

  normalizeEntityName() {
  },

  beforeInstall() {
    let preprocessor = 'none';

    let dependencies = this.project.dependencies();
    if ('ember-cli-sass' in dependencies) {
      preprocessor = 'sass';
    } else if ('ember-cli-less' in dependencies) {
      preprocessor = 'less';
    }
    this.preprocessor = preprocessor;
  },

  afterInstall() {
    return this.addAddonsToProject({ packages: ['ember-power-select','ember-power-select-blockless'] })
      .then(() => this.addPreprocessorStyleImport())
      .then(() => this.addBuildConfiguration());
  },

  addPreprocessorStyleImport() {
    let preprocessor = this.preprocessor;
    let importStatement = '\n@import "ember-power-select/themes/bootstrap";\n';

    if (preprocessor === 'none') {
      return;
    }

    let extension = preprocessor === 'sass' ? 'scss' : 'less';

    let stylePath = path.join('app', 'styles');
    let file = path.join(stylePath, `app.${extension}`);

    if (!fs.existsSync(stylePath)) {
      fs.mkdirSync(stylePath);
    }
    if (fs.existsSync(file)) {
      this.ui.writeLine(`Added import statement to ${file}`);
      return this.insertIntoFile(file, importStatement, { before: '@import "ember-power-select";' });
    } else {
      this.ui.writeLine(`Created ${file}`);
      return writeFile(file, importStatement);
    }
  },

  addBuildConfiguration() {
    let preprocessor = this.preprocessor;
    if (preprocessor !== 'none') {
      return;
    }
    let file = 'ember-cli-build.js';
    let settings = {
      theme: 'bootstrap'
    };
    let configKey = 'ember-power-select';

    if (!fs.existsSync(file)) {
      this.ui.writeLine(chalk.red(`Could not find ${file} to modify.`));
      return;
    }

    let source = fs.readFileSync(file, 'utf-8');
    let build = new BuildConfigEditor(source);

    try {
      let newBuild = build.edit(configKey, settings);
      fs.writeFileSync(file, newBuild.code());
      this.ui.writeLine(chalk.green(`Added ember-power-select configuration to ${file}`));
    } catch(error) {
      let settingsString = JSON.stringify(settings);
      this.ui.writeLine(chalk.red(`Configuration file could not be edited. Manually update your ${file} to include '${configKey}': ${settingsString}`));
    }
  }
};
