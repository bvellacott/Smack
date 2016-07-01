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
  actions: {
  	toggleExpand() {
	  	this.set('expanded', !this.expanded);
	  	return false;
  	}
  }
});
