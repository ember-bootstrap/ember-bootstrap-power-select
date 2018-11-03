import Control from 'ember-bootstrap/components/bs-form/element/control';
import layout from '../../../../templates/components/bs-form/element/control/power-select';

export default Control.extend({
  layout,
  tagName: '',

  /**
   * @property powerSelectComponent
   * @type {String}
   */
  powerSelectComponent: 'power-select',

  /**
   * @property powerSelectBlocklessComponent
   * @type {String}
   */
  powerSelectBlocklessComponent: 'power-select-blockless'
});
