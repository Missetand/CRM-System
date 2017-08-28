import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.createRecord('media');
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new Photographer');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('media/forms');
  },

  actions: {

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    },

    saveMediaHouses(newMediaHouses) {
      newMediaHouses.save().then(() => this.transitionTo('media'));
    }
  }
});