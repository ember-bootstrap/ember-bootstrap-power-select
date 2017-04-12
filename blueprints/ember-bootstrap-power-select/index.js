/* eslint-env node */
'use strict';

const rsvp = require('rsvp');
const fs = require('fs-extra');
const path = require('path');
const writeFile = rsvp.denodeify(fs.writeFile);

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
    return this.addAddonToProject('ember-power-select')
      .then(() => this.addPreprocessorStyleImport());
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
  }
};
