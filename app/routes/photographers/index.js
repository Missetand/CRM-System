import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('photographers');
      },
    
      actions: {
    
        deletePhotographers(photographers) {
          let confirmation = confirm('Are you sure?');
    
          if (confirmation) {
            photographers.destroyRecord();
          }
        }
      }
});