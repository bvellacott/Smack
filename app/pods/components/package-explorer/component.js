import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),

  actions: {
    newPack() {
      var newPack = this.get('store').createRecord('package', { name: "new", parent: null });
      this.packs.pushObject(newPack);
    },
  }
});
