import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [],
  tagName: 'li',
  classNameBindings: [ 'expanded:expanded:collapsed' ],

  expanded: true,
  object: {},

  actions: {
  	toggleExpand() {
	  	this.set('expanded', !this.expanded);
	  	return false;
  	},
  	toggleSelected(path) {
	  	if(this.name === this.get('treePath'))
	  		this.set('selectedPath', path);
  	},
  	newFunction() {
  		
  	}
  },
 });
