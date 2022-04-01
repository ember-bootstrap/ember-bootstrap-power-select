import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  options = ['foo', 'bar'];
  optionsPojo = [{ title: 'foo' }, { title: 'bar' }];
}
