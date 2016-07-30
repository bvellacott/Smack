import Ember from 'ember';
// import Ps from 'npm:perfect-scrollbar';

export default Ember.Component.extend({

  classNames: ['left-sidebar'],

  didInsertElement(...args) {
    this._super(...args);

    Ps.initialize(this.element);
  },

  willDestroyElement(...args) {
    this._super(...args);

    Ps.destroy(this.element);
  }
});
