import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('architects');
  },

  actions: {

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    },
    
    addNewArchitect(newArchitect) {
      newArchitect.save().then(() => {
        this.transitionTo('architects.index');
      });
    }
}

});