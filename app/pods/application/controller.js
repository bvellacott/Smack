import Ember from 'ember';

export default Ember.Controller.extend({
	name: 'newUnit',
	pack: 'newPackage',
	// idx : 0,
	actions: {
		new(name, pack) {
			var newUnit = this.store.createRecord('compilation-unit', { name: this.name, source: 'pack ' + this.pack + '; func hello(){ ret "hello"; }'});
			// this.idx++;
			var ctx = this;
			newUnit.save().then(() => {
				ctx.send("refresh");
			});
		},
		newPack() {
			var newPack = this.store.createRecord('package', { name: this.pack })
			var ctx = this;
			newPack.save().then(() => {
				ctx.send("refresh");
			});
			// this.currentModel[name + this.idx] = {};
			// this.idx++;
			// this.renderTemplate();
		},
	}
});
