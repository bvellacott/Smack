import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
	name: 'newPackage',
	namespace: {},
	// isModel: Ember.computed('namespace', function() {
 //    return this.namespace instanceof DS.Model;
 //  }),
	// tagName: Ember.computed('isModel', function() {
 //    return this.get('isModel') ? 'div' : 'ul';
 //  }),
  tagName: 'ul',
  classNames: [ 'tree' ],
});
