import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		new(name, pack) {
			this.store.createRecord('compilation-unit', { name: name, source: 'pack ' + pack + ';'});
		}
	}
});
