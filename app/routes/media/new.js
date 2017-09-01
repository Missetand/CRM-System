import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('media');
  },

  actions: {

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    },
    
    addNewMedia(newMedia) {
      newMedia.save().then(() => {
        this.transitionTo('media.index');
      });
    }
}

});