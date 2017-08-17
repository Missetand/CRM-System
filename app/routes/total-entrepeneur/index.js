import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('total-entrepeneur');
      },
    
      actions: {
    
        deleteTotalEntrepeneur(totalEntrepeneur) {
          let confirmation = confirm('Are you sure?');
    
          if (confirmation) {
            totalEntrepeneur.destroyRecord();
          }
        }
      }
});