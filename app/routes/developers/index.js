import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('developers');
  },

  actions: {
    deleteDeveloper(item) {
      item.destroyRecord();
    }
  }
});