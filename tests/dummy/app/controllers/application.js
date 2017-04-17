import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  options: ['foo', 'bar'],
  optionsPojo: computed.map('options', (title) => ({ title }))
});
