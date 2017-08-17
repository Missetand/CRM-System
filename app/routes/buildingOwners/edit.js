import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('buildingOwners', params.buildingOwners_id);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Edit BuildingOwners');
    controller.set('buttonLabel', 'Save changes');
  },

  renderTemplate() {
    this.render('buildingOwners/forms');
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
    saveBuildingOwners(buildingOwners) {
      buildingOwners.save().then(() => this.transitionTo('buildingOwners'));
    },


  }
});