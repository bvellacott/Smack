import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: [ 'expanded:expanded:collapsed'/*, 'isLeaf:leaf'*/ ],

  expanded: true,
  object: {},

	// isLeaf: Ember.computed('object', function() {
 //    return this.object
 //    	&& typeof this.object === 'object' 
 //    	&& Object.keys(this.object).length == 0;
 //  }),
  // click() {
  // 	this.set('expanded', !this.expanded);
  // 	return false;
  // },
	selected : Ember.computed('selectedPath', 'treePath', function() {
    return this.selectedPath && this.selectedPath === this.treePath;
  }),
  listContext : {},
	parentPath: null,
	treePath : Ember.computed('parentPath', 'name', function() {
    return (this.parentPath ? this.parentPath + '.' : '') + this.name;
  }),
  actions: {
  	toggleExpand() {
	  	this.set('expanded', !this.expanded);
	  	return false;
  	},
  	toggleSelected(path) {
	  	if(this.name === this.get('treePath'))
	  		this.set('selectedPath', path);
  	}
  },
 });
