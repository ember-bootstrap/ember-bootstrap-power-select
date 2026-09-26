# ember-bootstrap-power-select

![CI](https://github.com/kaliber5/ember-bootstrap-power-select/workflows/CI/badge.svg)
[![Ember Observer Score](https://emberobserver.com/badges/ember-bootstrap-power-select.svg)](https://emberobserver.com/addons/ember-bootstrap-power-select)
[![npm version](https://badge.fury.io/js/ember-bootstrap-power-select.svg)](https://badge.fury.io/js/ember-bootstrap-power-select)

Integrate [Ember Power Select](http://www.ember-power-select.com/) into your [Ember Bootstrap](https://www.ember-bootstrap.com)
forms.

## Compatibility

- Ember Power Select v6 or above
- Ember Bootstrap v5 or above
- Ember.js v3.28 or above
- Ember CLI v3.28 or above
- Node.js v20 or above

## Installation

1. Install Ember Power Select and configure it to use the Bootstrap theme.
   
   Please see [Ember Power Select documentation](https://ember-power-select.com/docs/installation)
   for details.

2. Install Ember Bootstrap Power Select

   ```bash
   ember install ember-bootstrap-power-select
   ```

## Usage

This addon provides the control components `PowerSelectControl` and `PowerSelectMultipleControl` to be used as
`@controlComponent` in a `<BsForm>`. Use the `@options` argument to set the available options.

```gjs
import { PowerSelectControl } from "ember-bootstrap-power-select";

<template>
  <BsForm @model={{yourModel}} as |form|>
    <form.element
      @controlComponent={{PowerSelectControl}}
      @property="foo"
      @label="Choose"
      @options={{options}}
    />
  </BsForm>
</template>
```

If your options array consists of objects, use the `optionLabelPath` to specify the property that should be used as the
options label:

```gjs
import { PowerSelectControl } from "ember-bootstrap-power-select";

<template>
  <BsForm @model={{yourModel}} as |form|>
    <form.element
      @controlComponent={{PowerSelectControl}}
      @property="foo"
      @label="Choose"
      @options={{options}}
      @optionsLabelPath="title"
    />
  </BsForm>
</template>
```

If you need more control over how the options label are rendered (e.g. for formatting or internalization) you should use the yielded `<control>` component in block mode:

```gjs
import { PowerSelectControl } from "ember-bootstrap-power-select";

<template>
  <BsForm @model={{yourModel}} as |form|>
    <form.element
      @controlComponent={{PowerSelectControl}}
      @label="Author"
      @options={{options}}
      as |el|
    >
      <el.control as |option|>
        {{option.name}}
        (b.
        {{format-date option.dayOfBirth}})
      </el.control>
    </form.element>
  </BsForm>
</template>
```

If not yet using Embroider in optimized mode, you can invoke the same control
component by setting the `@controlType` to `power-select`.

```hbs
<BsForm @model={{yourModel}} as |form|>
  <form.element
    @controlType="power-select"
    @property="foo"
    @label="Choose"
    @options={{options}}
  />
</BsForm>
```

### Multiple selection

Selecting multiple options is supported through the `@multiple={{true}}` argument as of Ember Power Select 8.11
and Ember Bootstrap Power Select 6.2:

```gjs
import { PowerSelectControl } from "ember-bootstrap-power-select";

<template>
  <BsForm @model={{yourModel}} as |form|>
    <form.element
      @controlComponent={{PowerSelectControl}}
      @property="foo"
      @label="Choose"
      @options={{options}}
      @optionsLabelPath="title"
      as |el|
    >
      <el.control @multiple={{true}}>
    </form.element>
  </BsForm>
</template>
```

Ember Bootstrap Power Select provides the `PowerSelectMultipleControl` component, which supports older
versions of Ember Power Select by using its `PowerSelectMultiple` component:

```gjs
import { PowerSelectMultipleControl } from "ember-bootstrap-power-select";

<template>
  <BsForm @model={{yourModel}} as |form|>
    <form.element
      @controlComponent={{PowerSelectMultipleControl}}
      @property="foo"
      @label="Choose"
      @options={{options}}
      @optionsLabelPath="title"
    />
  </BsForm>
</template>
```

### Advanced usage

If you need more control of the power-select configuration, use the yielded `control` component to get direct access
to the power-select component. The power-select's `selected`, `disabled` properties and the `onChange`
action are already wired up to the controlling `form.element` for you. Set any other options as you need:

```gjs
import { PowerSelectControl } from "ember-bootstrap-power-select";

<template>
  <BsForm @model={{yourModel}} as |form|>
    <form.element
      @controlComponent={{PowerSelectControl}}
      @property="foo"
      @label="Choose"
      @options={{options}}
      as |el|
    >
      <el.control @searchEnabled={{true}} @searchPlaceholder="Type your name" />
    </form.element>
  </BsForm>
</template>
```

Please consult the [Ember Power Select documentation](http://www.ember-power-select.com/docs) for all available options.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
