import Controller from '@ember/controller';
import {
  PowerSelectControl,
  PowerSelectMultipleControl,
} from 'ember-bootstrap-power-select';

export default class ApplicationController extends Controller {
  options = ['foo', 'bar'];
  optionsPojo = [{ title: 'foo' }, { title: 'bar' }];

  PowerSelectControl = PowerSelectControl;
  PowerSelectMultipleControl = PowerSelectMultipleControl;
}
