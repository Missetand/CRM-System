import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('municipality');
  },

  actions: {

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    },
    
    addNewMunicipality(newMunicipality) {
      newMunicipality.save().then(() => {
        this.transitionTo('municipality.index');
      });
    }
}

});