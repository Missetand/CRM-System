import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.createRecord('building-owners');
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new Building Owner');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('buildingOwners/forms');
  },

  actions: {

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    },

    saveBuildingOwners(newBuildingOwners) {
      newBuildingOwners.save().then(() => this.transitionTo('buildingOwners'));
    }
  }
});