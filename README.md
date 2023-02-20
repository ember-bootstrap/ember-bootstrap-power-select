# ember-bootstrap-power-select

![CI](https://github.com/kaliber5/ember-bootstrap-power-select/workflows/CI/badge.svg)
[![Ember Observer Score](https://emberobserver.com/badges/ember-bootstrap-power-select.svg)](https://emberobserver.com/addons/ember-bootstrap-power-select)
[![npm version](https://badge.fury.io/js/ember-bootstrap-power-select.svg)](https://badge.fury.io/js/ember-bootstrap-power-select)

Integrate [Ember Power Select](http://www.ember-power-select.com/) into your [Ember Bootstrap](https://www.ember-bootstrap.com)
forms.

## Compatibility

* Ember Power Select v6 or above
* Ember Bootstrap v5 or above
* Ember.js v3.28 or above
* Ember CLI v3.28 or above
* Node.js v14 or above


## Installation

```bash
ember install ember-bootstrap-power-select
```

This will additionally install `ember-power-select` into your app, and setup its
Bootstrap theme, either by importing the appropriate Less or Sass file (if you use one of these preprocessors), or by
editing your `ember-cli-build.js` to include the static theme CSS (if you use plain CSS). 

## Usage

With this addon installed, you have a new `controlType` of `power-select` available. Use the `options` property to
set the array of selectable options:

```hbs
<BsForm @model={{yourModel}} as |form|>
  <form.element @controlType="power-select" @property="foo" @label="Choose" @options={{options}} />
</BsForm>
```

If your options array consists of objects, use the `optionLabelPath` to specify the property that should be used as the
options label:

```hbs
<BsForm @model={{yourModel}} as |form|>
  <form.element @controlType="power-select" @property="foo" @label="Choose" @options={{options}} @optionLabelPath="title" />
</BsForm>
```

If you need more control over how the options label are rendered (e.g. for formatting or internalization) you should use the yielded `<control>` component in block mode:

```hbs
<BsForm @model={{yourModel}} as |form|>
  <form.element @controlType="power-select" @property="author" @label="Author" @options={{options}} as |el|>
    <el.control as |option|>
      {{option.name}} (b. {{format-date option.dayOfBirth}})
    </el.control>
  </form.element>
</BsForm>
```

### Power Select Multiple

The `power-select-multiple` is also supported and works similarly to the `power-select` implementation.

```hbs
<BsForm @model={{yourModel}} as |form|>
  <form.element @controlType="power-select-multiple" @property="foo" @label="Choose" @options={{options}} />
</BsForm>
```

### Advanced usage

If you need more control of the power-select configuration, use the yielded `control` component to get direct access
to the power-select component. The power-select's `selected`, `disabled` properties and the `onChange`
action are already wired up to the controlling `form.element` for you. Set any other options as you need:

```hbs
<BsForm @model={{yourModel}} as |form|>
  <form.element @controlType="power-select" @property="foo" @label="Choose" @options={{options}} as |el|>
    <el.control @searchPlaceholder="Type your name" />
  </form.element>
</BsForm>
```

Please consult the [Ember Power Select documentation](http://www.ember-power-select.com/docs) for all available options.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
