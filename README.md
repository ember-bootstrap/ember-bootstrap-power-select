# ember-bootstrap-power-select

[![Greenkeeper badge](https://badges.greenkeeper.io/kaliber5/ember-bootstrap-power-select.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/kaliber5/ember-bootstrap-power-select.svg?branch=master)](https://travis-ci.org/kaliber5/ember-bootstrap-power-select)
[![Ember Observer Score](https://emberobserver.com/badges/ember-bootstrap-power-select.svg)](https://emberobserver.com/addons/ember-bootstrap-power-select)
[![npm version](https://badge.fury.io/js/ember-bootstrap-power-select.svg)](https://badge.fury.io/js/ember-bootstrap-power-select)

Integrate [ember-power-select](http://www.ember-power-select.com/) into your [ember-bootstrap](http;//www.ember.bootstrap.com)
forms.

## Installation

You need to have at least `1.0.0-alpha.11` of ember-bootstrap installed in your app. Then run...

```bash
ember install ember-bootstrap-power-select
```

This will additionally install `ember-power-select` and `ember-power-select-blockless` into your app, and setup its
Bootstrap theme, either by importing the appropriate Less or Sass file (if you use one of these preprocessors), or by
editing your `ember-cli-build.js` to include the static theme CSS (if you use plain CSS). 

## Usage

With this addon installed, you have a new `controlType` of `power-select` available. Use the `options` property to 
set the array of selectable options:

```hbs
{{#bs-form model=yourModel as |form|}}  
  {{form.element controlType="power-select" property="foo" label="Choose" options=options}}
{{/bs-form}}
```

If your options array consists of objects, use the `optionLabelPath` to specify the property that should be used as the
options label:

```hbs
{{#bs-form model=yourModel as |form|}}  
  {{form.element controlType="power-select" property="foo" label="Choose" options=options optionLabelPath="title"}}
{{/bs-form}}
```

### Power Select Multiple
The `power-select-multiple` is also supported and works similarly to the `power-select` implementation.

```hbs
{{#bs-form model=yourModel as |form|}}  
  {{form.element controlType="power-select-multiple" property="foo" label="Choose" options=options}}
{{/bs-form}}
```

### Advanced usage

If you need more control of the power-select configuration, use the yielded `control` component to get direct access
to the power-select component. The power-select's `selected`, `disabled` and `placeholder` properties and the `onchange`
action are already wired up to the controlling `form.element` for you. Set any other options as you need:

```hbs
{{#bs-form model=yourModel as |form|}}
  {{#form.element controlType="power-select" property="foo" label="Choose" options=options as |el|}}
    {{el.control searchPlaceholder="Type your name"}}
  {{/form.element}}
{{/bs-form}}
```

You can also use the block form of the component to customize the rendering of the options:

```hbs
{{#bs-form model=yourModel as |form|}}
  {{#form.element controlType="power-select" property="foo" label="Choose" options=options as |el|}}
    {{#el.control searchPlaceholder="Type your name" as |item|}}
      {{item.name}}
    {{/el.control}}
  {{/form.element}}
{{/bs-form}}
```

Please consult the [ember-power-select documentation](http://www.ember-power-select.com/docs) for all available options.
