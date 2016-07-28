import Ember from 'ember';
import general from 'general';


export default Ember.Route.extend({
	model() {
		// return this.store.findAll('package').then(packs => {
		// 	// return packs;
		// 	return packs.filter(pack => { return pack.get('parent').then(parent => { return !parent; }) });
		// });
		return this.store.query('package', 'where parent = null').then(
			packs => { return packs.filter(p => { return true; }); },
			err => { Ember.Messaging.notify('error', err); }
		);
		// var model = this.store.query('package', 'where parent = null');
		// var model = this.store.findRecord('package', '49p53');
		// var model = this.store.findAll('package');
		// return model;
		// return this.store.findAll('compilation-unit').then(
		// units => {
		// 	return general.toPackageTree(units);
		// },
		// err => {
		// 	console.log('failed to fetch the compilation units');
		// 	throw err;
		// });
	},
	actions: {
		refresh() {
			this.refresh();
		}
	},
	init() {
		this._super(...arguments);
		Ember.Messaging.setListener(this, 'reset', () => {
      this.transitionTo('index');
			this.refresh();
    });
		Ember.Messaging.setListener(this, 'refresh', () => {
			this.refresh();
    });
  },
});
