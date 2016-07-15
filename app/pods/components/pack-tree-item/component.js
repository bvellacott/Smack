import Ember from 'ember';

export default Ember.Component.extend({
  setup: Ember.on('init', function() {
    Ember.Messaging.setListener(this, 'package-explorer.pack.toggleExpand', function(elementId){
      if(elementId === this.elementId)
        this.set('expanded', !this.expanded);
      this.set('menuExpand', false);
    });
    Ember.Messaging.setListener(this, 'package-explorer.menu.toggleExpand', function(elementId){
      if(elementId === this.elementId)
        this.set('menuExpand', !this.menuExpand);
      else
        this.set('menuExpand', false);
    });
    Ember.Messaging.setListener(this, 'package-explorer.item.select', function(elementId){
      this.set('menuExpand', false);
    });
  }),
  teardown: Ember.on('willDestroyElement', function() {
    Ember.Messaging.removeListener(this, 'package-explorer.pack.toggleExpand');
    Ember.Messaging.removeListener(this, 'package-explorer.menu.toggleExpand');
    Ember.Messaging.removeListener(this, 'package-explorer.item.select');
  }),

  classNames: [],
  tagName: 'li',
  classNameBindings: [ 'expanded:expanded:collapsed' ],

  expanded: true,
  menuExpand: false,
  object: {},

  actions: {
  	toggleExpand() {
      Ember.Messaging.notify('package-explorer.pack.toggleExpand', this.elementId);
	  	return false;
  	},
  	toggleSelected(path) {
	  	if(this.name === this.get('treePath'))
	  		this.set('selectedPath', path);
  	},
    toggleMenu() {
      Ember.Messaging.notify('package-explorer.menu.toggleExpand', this.elementId);
    },
  	newFunction() {
  		
  	}
  },
 });
