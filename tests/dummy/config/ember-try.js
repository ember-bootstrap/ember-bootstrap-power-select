'use strict';

const getChannelURL = require('ember-source-channel-url');
const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function () {
  return {
    packageManager: 'pnpm',
    scenarios: [
      {
        name: 'ember-lts-3.28',
        npm: {
          devDependencies: {
            '@glimmer/component': '^1.0.0',
            'ember-bootstrap': '^5.0.0',
            'ember-cli': '~4.12.0',
            'ember-page-title': '^8.0.0',
            'ember-resolver': '^11.0.0',
            'ember-source': '~3.28.0',
            'ember-truth-helpers': '^4.0.0',
          },
        },
      },
      {
        name: 'ember-lts-4.12',
        npm: {
          devDependencies: {
            'ember-source': '~5.8.0',
          },
        },
      },
      {
        name: 'ember-lts-5.12',
        npm: {
          devDependencies: {
            'ember-source': '~5.12.0',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release'),
          },
        },
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta'),
          },
        },
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('canary'),
          },
        },
      },
      {
        name: 'ember-power-select-v6',
        npm: {
          devDependencies: {
            'ember-cli': '~4.12.0',
            'ember-power-select': '^6.0.0',
          },
        },
      },
      {
        name: 'ember-power-select-v7',
        npm: {
          devDependencies: {
            'ember-cli': '~4.12.0',
            'ember-power-select': '^7.0.0',
          },
        },
      },
      embroiderSafe(),
      embroiderOptimized(),
    ],
  };
};
