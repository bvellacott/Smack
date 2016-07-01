import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'li',
	classNames: [ 'leaf' ],
	unit: { name: 'moi!' },
  click() {
  	// this.set('expanded', !this.expanded);
  	return false;
  }
});
