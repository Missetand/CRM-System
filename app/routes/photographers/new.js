import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('photographers');
  },

  actions: {

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    },
    
    addNewPhotographer(newPhotographer) {
      newPhotographer.save().then(() => {
        this.transitionTo('photographers.index');
      });
    }
}

});