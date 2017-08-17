import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('architects');
      },
    
      actions: {
    
        deleteArchitects(architects) {
          let confirmation = confirm('Are you sure?');
    
          if (confirmation) {
            architects.destroyRecord();
          }
        }
      }
});