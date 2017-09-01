import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('total');
  },

  actions: {

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    },
    
    addNewTotal(newTotal) {
      newTotal.save().then(() => {
        this.transitionTo('total.index');
      });
    }
}

});