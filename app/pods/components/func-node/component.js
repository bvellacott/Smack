import Ember from 'ember';

export default Ember.Component.extend({


	tagName: 'li',
	classNames: [ 'leaf' ],
	unit: { name: 'moi!' },

	rootName: 'something',
	parentPath: null,
	treePath : Ember.computed('parentPath', 'name', function() {
    return (this.parentPath ? this.parentPath + '.' : '') + this.name;
  }),
	selected : Ember.computed('selectedId', function() {
    return this.selectedId && this.selectedId === this.elementId;
  }),
  actions: {
  	select() {
	  	Ember.Messaging.notify(this.rootName + '.item.select', this.elementId);
  	}
  },
  init() {
    this._super(...arguments);
    Ember.Messaging.setListener(this, this.rootName + '.item.select', function(elementId){
    	this.set('selectedId', elementId);
    });
  },
	willDestroyElement() {
	  this._super(...arguments);
    Ember.Messaging.removeListener(this, this.rootName + '.item.select');
	}
});
