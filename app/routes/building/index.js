import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('building');
  },

  actions: {
    deleteBuilding(item) {
      item.destroyRecord();
    }
  }
});