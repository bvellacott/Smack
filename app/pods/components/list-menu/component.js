import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'ul',
	classNames: ['list-menu'],
  classNameBindings: [ 'expanded:expanded:collapsed' ],
  // expanded: true,
});
