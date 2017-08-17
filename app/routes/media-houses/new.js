import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.createRecord('media-houses');
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new Photographer');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('mediaHouses/forms');
  },

  actions: {

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    },

    saveMediaHouses(newMediaHouses) {
      newMediaHouses.save().then(() => this.transitionTo('mediaHouses'));
    }
  }
});