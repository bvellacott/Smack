import Ember from 'ember';

export default Ember.Route.extend({
	// model() {
	// 	return this.store.createRecord('compilation-unit', { name : 'sum', source : 'pack math; func sum(a, b) { return a + b; }' });
	// },
	renderTemplate() {
		// this.render();
		this.render('compilation-unit', { outlet : 'main' });
	}
});
