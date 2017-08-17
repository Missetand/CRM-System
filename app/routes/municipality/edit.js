import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('municipality', params.municipality_id);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Edit Municipality');
    controller.set('buttonLabel', 'Save changes');
  },

  renderTemplate() {
    this.render('municipality/forms');
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
    saveMunicipality(municipality) {
      municipality.save().then(() => this.transitionTo('municipality'));
    },


  }
});