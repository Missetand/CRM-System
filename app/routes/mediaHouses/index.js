import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('mediaHouses');
      },
    
      actions: {
    
        deleteMediaHouses(mediaHouses) {
          let confirmation = confirm('Are you sure?');
    
          if (confirmation) {
            mediaHouses.destroyRecord();
          }
        }
      }
});