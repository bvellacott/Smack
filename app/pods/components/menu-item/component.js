import Ember from 'ember';

export default Ember.Component.extend({
  setup: Ember.on('init', function() {
    if(this.class)
      this.classNames = this.class;
  }),
  tagName: 'menuitem'
});
