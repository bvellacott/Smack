import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
	// setup: Ember.on('init', function() {
	// 	this.set(parents, );
	// }),
	name: 'newPackage',

	listContext : {},
	parentPath: null,
	treePath : Ember.computed('parentPath', 'name', function() {
    return (this.parentPath ? this.parentPath + '.' : '') + this.name;
  }),

  tagName: 'ul',
  classNames: [ 'tree' ],
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
