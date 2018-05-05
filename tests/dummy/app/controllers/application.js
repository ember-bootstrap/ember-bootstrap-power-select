import { map } from '@ember/object/computed';
import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  options: computed(() => ['foo', 'bar']),
  optionsPojo: map('options', (title) => ({ title }))
});
