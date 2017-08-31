import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('municipality', params.municipality_id);
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
    
    updateMunicipality(editedMunicipality) {
      editedMunicipality.save().then(() => {
        this.transitionTo('municipality.index');
      });
    }
  }

});