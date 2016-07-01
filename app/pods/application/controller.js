import Ember from 'ember';

export default Ember.Controller.extend({
	name: 'newUnit',
	pack: 'pack',
	idx : 0,
	actions: {
		new(name, pack) {
			var newUnit = this.store.createRecord('compilation-unit', { name: this.name, source: 'pack ' + this.pack + '; func hello(){ ret "hello"; }'});
			this.idx++;
			var ctx = this;
			// ctx.refresh();
			newUnit.save().then(function() {
				ctx.send("refresh");
				// ctx.refresh();
			});
		},
		addPack(name) {
			this.currentModel[name + this.idx] = {};
			this.idx++;
			this.renderTemplate();
		},
	}
});
