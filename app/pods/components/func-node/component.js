import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'li',
	classNames: [ 'leaf' ],
	unit: { name: 'moi!' },

  selected : Ember.computed('selectedId', function() {
    return this.selectedId && this.selectedId === this.elementId;
  }),
  path : Ember.computed('unit.pack', 'unit.name', function() {
    return this.unit.get('pack') + '.' + this.unit.get('name');
  }),
  expanded: false,
  actions: {
  	select() {
	  	Ember.Messaging.notify('package-explorer.item.select', this.elementId);
  	},
    toggleMenu() {
      this.set('expanded', !this.expanded);
    }
  },
  init() {
    this._super(...arguments);
    Ember.Messaging.setListener(this, 'package-explorer.item.select', function(elementId){
    	this.set('selectedId', elementId);
    });
  },
	willDestroyElement() {
	  this._super(...arguments);
    Ember.Messaging.removeListener(this, 'package-explorer.item.select');
	}
});
