import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('architects');
  },

  actions: {
    deleteMedia(item) {
      item.destroyRecord();
    }
  }
});