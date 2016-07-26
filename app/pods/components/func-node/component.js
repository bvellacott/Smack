import Ember from 'ember';

export default Ember.Component.extend({
  setup: Ember.on('init', function() {
    Ember.Messaging.setListener(this, 'package-explorer.item.select', function(elementId){
      this.set('selectedId', elementId);
    });
    Ember.Messaging.setListener(this, 'package-explorer.menu.toggleExpand', function(elementId){
      if(elementId === this.elementId)
        this.set('menuExpand', !this.menuExpand);
      else
        this.set('menuExpand', false);
    });
    Ember.Messaging.setListener(this, 'package-explorer.pack.toggleExpand', function(elementId){
      this.set('menuExpand', false);
    });
  }),
  teardown: Ember.on('willDestroyElement', function() {
    Ember.Messaging.removeListener(this, 'package-explorer.item.select');
    Ember.Messaging.removeListener(this, 'package-explorer.menu.toggleExpand');
    Ember.Messaging.removeListener(this, 'package-explorer.pack.toggleExpand');
  }),

  store: Ember.inject.service(),

	tagName: 'li',
	classNames: [ 'leaf' ],
	unit: { name: 'moi!' },

  selected : Ember.computed('selectedId', function() {
    return this.selectedId && this.selectedId === this.elementId;
  }),
  path : Ember.computed('unit.pack', 'unit.name', function() {
    return this.unit.get('pack') + '.' + this.unit.get('name');
  }),
  menuExpand: false,
  actions: {
  	select() {
	  	Ember.Messaging.notify('package-explorer.item.select', this.elementId);
  	},
    toggleMenu() {
      Ember.Messaging.notify('package-explorer.menu.toggleExpand', this.elementId);
    },
    save() {
      this.unit.set('source', 'func ' + this.unit.get('name') + '(){}');
      this.unit.save();
    },
    delete() {
      this.unit.destroyRecord();
    }
  },
});
