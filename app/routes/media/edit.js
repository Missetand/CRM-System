import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('media', params.media_id);
  },

  actions: {

    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    },
    
    updateMedia(editedMedia) {
      editedMedia.save().then(() => {
        this.transitionTo('media.index');
      });
    }
  }

});