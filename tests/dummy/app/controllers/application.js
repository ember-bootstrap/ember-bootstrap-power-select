import { map } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
  options: ['foo', 'bar'],
  optionsPojo: map('options', (title) => ({ title }))
});
