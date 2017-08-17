import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.createRecord('architects');
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new Photographer');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('architects/forms');
  },

  actions: {

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    },

    saveArchitects(newArchitects) {
      newArchitects.save().then(() => this.transitionTo('architects'));
    }
  }
});