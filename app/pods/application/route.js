import Ember from 'ember';
import general from 'general';


export default Ember.Route.extend({
	model() {
		return this.store.findAll('compilation-unit').then(
		units => {
			return general.toPackageTree(units);
		}, 
		err => {
			console.log('failed to fetch the compilation units');
			throw err;
		});
	},
	actions: {
		refresh() {
			this.refresh();
		}
	}
});
