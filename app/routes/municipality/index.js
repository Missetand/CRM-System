import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('municipality');
  },

  actions: {
    deleteDeveloper(item) {
      item.destroyRecord();
    }
  }
});