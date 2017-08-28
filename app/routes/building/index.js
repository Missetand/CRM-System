import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('building');
      },
    
      actions: {
    
        deleteBuildingOwners(buildingOwners) {
          let confirmation = confirm('Are you sure?');
    
          if (confirmation) {
            buildingOwners.destroyRecord();
          }
        }
      }
});