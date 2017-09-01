import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('building');
  },

  actions: {

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    },
    
    addNewBuilding(newBuilding) {
      newBuilding.save().then(() => {
        this.transitionTo('building.index');
      });
    }
}

});