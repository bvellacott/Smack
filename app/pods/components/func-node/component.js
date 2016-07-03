import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'li',
	classNames: [ 'leaf' ],
	unit: { name: 'moi!' },

	parentPath: null,
	treePath : Ember.computed('parentPath', 'name', function() {
    return (this.parentPath ? this.parentPath + '.' : '') + this.name;
  }),
	selected : Ember.computed('selectedPath', 'treePath', function() {
    return this.selectedPath && this.selectedPath === this.treePath;
  }),
  actions: {
  	toggleSelected(path) {
	  	if(this.name === this.get('treePath'))
	  		this.set('selectedPath', path);
  	}
  }
});
