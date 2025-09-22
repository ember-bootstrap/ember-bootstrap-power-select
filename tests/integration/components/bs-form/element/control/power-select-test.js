import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render,
  click,
  find,
  findAll,
  triggerKeyEvent,
} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { clickTrigger } from 'ember-power-select/test-support/helpers';

module(
  'Integration | Component | bs form/element/control/power select',
  function (hooks) {
    setupRenderingTest(hooks);

    hooks.beforeEach(function () {
      this.set('model', {
        prop: 'foo',
      });
      this.set('options', ['foo', 'bar']);
    });

    test('it renders as blockless element', async function (assert) {
      await render(hbs`
    <BsForm @model={{this.model}} as |form|>
      <form.element @controlType="power-select" @property="prop" @options={{this.options}} />
    </BsForm>`);
      assert.dom('.ember-power-select-trigger').exists({ count: 1 });
      assert.dom('.ember-power-select-selected-item').hasText('foo');
      await clickTrigger();
      assert.dom('.ember-power-select-option').exists({ count: 2 });
      assert.dom(findAll('.ember-power-select-option')[0]).hasText('foo');
      assert.dom(findAll('.ember-power-select-option')[1]).hasText('bar');
      await click(findAll('.ember-power-select-option')[1]);
      assert.strictEqual(this.model.prop, 'bar');
    });

    test('it renders as blockless control component', async function (assert) {
      await render(hbs`
    <BsForm @model={{this.model}} as |form|>
      <form.element @controlType="power-select" @property="prop" @options={{this.options}} as |el|>
        {{el.control}}
      </form.element>
    </BsForm>`);
      assert.dom('.ember-power-select-trigger').exists({ count: 1 });
      assert.dom('.ember-power-select-selected-item').hasText('foo');
      await clickTrigger();
      assert.dom('.ember-power-select-option').exists({ count: 2 });
      assert.dom(findAll('.ember-power-select-option')[0]).hasText('foo');
      assert.dom(findAll('.ember-power-select-option')[1]).hasText('bar');
      await click(findAll('.ember-power-select-option')[1]);
      assert.strictEqual(this.model.prop, 'bar');
    });

    test('it renders as block control component', async function (assert) {
      await render(hbs`
    <BsForm @model={{this.model}} as |form|>
      <form.element @controlType="power-select" @property="prop" @options={{this.options}} as |el|>
        <el.control as |val|>
          {{val}}
        </el.control>
      </form.element>
    </BsForm>`);
      assert.dom('.ember-power-select-trigger').exists({ count: 1 });
      assert.dom('.ember-power-select-selected-item').hasText('foo');
      await clickTrigger();
      assert.dom('.ember-power-select-option').exists({ count: 2 });
      assert.dom(findAll('.ember-power-select-option')[0]).hasText('foo');
      assert.dom(findAll('.ember-power-select-option')[1]).hasText('bar');
      await click(findAll('.ember-power-select-option')[1]);
      assert.strictEqual(this.model.prop, 'bar');
    });

    test('it can disable select', async function (assert) {
      await render(hbs`
    <BsForm @disabled={{true}} as |form|>
      <form.element @controlType="power-select" @property="prop" @options={{this.options}} />
    </BsForm>`);
      assert.ok(
        find('.ember-power-select-trigger').getAttribute('aria-disabled'),
      );

      await render(hbs`
    <BsForm @disabled={{true}} as |form|>
      <form.element @controlType="power-select" @property="prop" @options={{this.options}} as |el|>
        <el.control as |val|>
          {{val}}
        </el.control>
      </form.element>
    </BsForm>`);
      assert.ok(
        find('.ember-power-select-trigger').getAttribute('aria-disabled'),
      );
    });

    test('it can render array of objects with objectLabelPath', async function (assert) {
      this.set(
        'options',
        this.options.map((title) => ({ title })),
      );
      this.set('model', {
        prop: this.options[0],
      });
      await render(hbs`
    <BsForm @model={{this.model}} as |form|>
      <form.element @controlType="power-select" @property="prop" @options={{this.options}} @optionLabelPath="title" />
    </BsForm>`);
      assert.dom('.ember-power-select-trigger').exists({ count: 1 });
      assert.dom('.ember-power-select-selected-item').hasText('foo');
      await clickTrigger();
      assert.dom('.ember-power-select-option').exists({ count: 2 });
      assert.dom(findAll('.ember-power-select-option')[0]).hasText('foo');
      assert.dom(findAll('.ember-power-select-option')[1]).hasText('bar');
      await click(findAll('.ember-power-select-option')[1]);
      assert.strictEqual(this.model.prop, this.options[1]);
    });

    test('it passes power-select options', async function (assert) {
      let lastKeyPress = null;
      this.set('onKeydown', function (select, event) {
        lastKeyPress = event.keyCode;
        return true;
      });
      await render(hbs`
    <BsForm as |form|>
      <form.element @controlType="power-select" @property="prop2" @options={{this.options}} @placeholder="something" as |el|>
        <el.control @onKeydown={{this.onKeydown}} @searchEnabled={{false}} @triggerClass="form-control" />
      </form.element>
    </BsForm>`);
      assert.dom('.form-control').exists();
      await triggerKeyEvent('.form-control', 'keydown', 'X');
      assert.strictEqual(lastKeyPress, 88);
      await clickTrigger();
      assert.dom('.ember-power-select-search-input').doesNotExist();
    });

    test('it passes HTML attributes', async function (assert) {
      // HTML attributes are not applied to any element if `renderInPlace` is `false`
      await render(hbs`
    <BsForm as |form|>
      <form.element @controlType="power-select" @property="prop" as |el|>
        <el.control @renderInPlace={{true}} data-test-foo />
      </form.element>
    </BsForm>`);
      assert.dom('[data-test-foo]').exists();
    });
  },
);
