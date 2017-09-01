import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('developers');
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
    
    addNewDeveloper(newDeveloper) {
      newDeveloper.save().then(() => {
        this.transitionTo('developers.index');
      });
    }
}

});