import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.createRecord('developers');
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new Developer');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('developers/forms');
  },

  actions: {

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    },

    saveDevelopers(newDevelopers) {
      newDevelopers.save().then(() => this.transitionTo('developers'));
    }
  }
});