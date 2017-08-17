import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('developers');
      },
    
      actions: {
    
        deleteDevelopers(developers) {
          let confirmation = confirm('Are you sure?');
    
          if (confirmation) {
            developers.destroyRecord();
          }
        }
      }
});