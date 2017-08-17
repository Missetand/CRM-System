import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.createRecord('municipality');
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new Photographer');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('municipality/forms');
  },

  actions: {

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    },

    saveMunicipality(newMunicipality) {
      newMunicipality.save().then(() => this.transitionTo('municipality'));
    }
  }
});