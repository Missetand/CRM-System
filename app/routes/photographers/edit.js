import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('photographers', params.photographers_id);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Edit Photographers');
    controller.set('buttonLabel', 'Save changes');
  },

  renderTemplate() {
    this.render('photographers/forms');
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
    savePhotographers(photographers) {
      photographers.save().then(() => this.transitionTo('photographers'));
    },


  }
});