import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('total');
  },

  actions: {
    deleteTotal(item) {
      item.destroyRecord();
    }
  }
});