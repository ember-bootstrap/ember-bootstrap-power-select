import Controller from '@ember/controller';
import PowerSelectControl from 'ember-bootstrap-power-select/components/bs-form/element/control/power-select';
import PowerSelectMultipleControl from 'ember-bootstrap-power-select/components/bs-form/element/control/power-select-multiple';

export default class ApplicationController extends Controller {
  options = ['foo', 'bar'];
  optionsPojo = [{ title: 'foo' }, { title: 'bar' }];

  PowerSelectControl = PowerSelectControl;
  PowerSelectMultipleControl = PowerSelectMultipleControl;
}
