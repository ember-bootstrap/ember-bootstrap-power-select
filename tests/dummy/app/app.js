import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'dummy/config/environment';
import { dependencySatisfies, importSync, macroCondition } from '@embroider/macros';

if (macroCondition(dependencySatisfies('ember-power-select', '>= 8.0.0'))) {
  importSync('ember-power-select/themes/bootstrap');
}

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
