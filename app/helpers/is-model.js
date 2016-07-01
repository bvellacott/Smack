import Ember from 'ember';
import DS from 'ember-data';

export function isModel(params/*, hash*/) {
  return params[0] instanceof DS.Model;
}

export default Ember.Helper.helper(isModel);
