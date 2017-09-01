import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('building');
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
    
    addNewBuilding(newBuilding) {
      newBuilding.save().then(() => {
        this.transitionTo('building.index');
      });
    }
}

});