import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('compilation-unit', { name : 'sum', source : 'pack math; func(a, b) { return a + b; }' });
	}
});
