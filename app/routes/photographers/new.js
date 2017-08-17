import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.createRecord('photographers');
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new Photographers');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('photographers/forms');
  },

  actions: {

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    },

    savePhotographers(newPhotographers) {
      newPhotographers.save().then(() => this.transitionTo('photographers'));
    }
  }
});