/* eslint-env node, mocha */
const {
  setupTestHooks,
  emberNew,
  emberGenerate,
  emberDestroy,
  modifyPackages,
} = require('ember-cli-blueprint-test-helpers/helpers');

const { expect, file } = require('ember-cli-blueprint-test-helpers/chai');

describe('Acceptance: ember generate and destroy ember-bootstrap-power-select', function () {
  // create and destroy temporary working directories
  setupTestHooks(this);

  it('ember-bootstrap-power-select foo', function () {
    const args = ['ember-bootstrap-power-select', 'foo'];

    // create a new Ember.js app in the working directory
    return emberNew()
      .then(() => emberGenerate(args))
      .then(() => {
        expect(file('ember-cli-build.js')).to.contain('ember-power-select');
      })
      .then(() => emberDestroy(args));
  });
});

describe('Acceptance: ember generate and destroy ember-bootstrap-power-select with style preprocessor', function () {
  setupTestHooks(this);

  it('ember-bootstrap-power-select foo with style preprocessor', function () {
    const args = ['ember-bootstrap-power-select', 'foo'];

    return emberNew()
      .then(() => modifyPackages([{ name: 'ember-cli-sass' }]))
      .then(() => emberGenerate(args))
      .then(() => {
        expect(file('app/styles/app.scss')).to.contain(
          'ember-power-select/themes/bootstrap',
        );
      })
      .then(() => emberDestroy(args));
  });
});
