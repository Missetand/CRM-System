import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('municipality');
      },
    
      actions: {
    
        deleteMunicipality(municipality) {
          let confirmation = confirm('Are you sure?');
    
          if (confirmation) {
            municipality.destroyRecord();
          }
        }
      }
});