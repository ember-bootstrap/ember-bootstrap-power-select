import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'dummy/config/environment';
import { importSync, isDevelopingApp, macroCondition } from '@embroider/macros';
import { setConfig } from 'ember-basic-dropdown/config';
import 'ember-basic-dropdown/styles';
import 'ember-power-select/styles';

if (macroCondition(isDevelopingApp())) {
  importSync('./deprecation-workflow');
}

setConfig({
  rootElement: config.APP.rootElement,
});

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
