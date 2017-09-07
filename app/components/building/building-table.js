import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'tr',
  classNames: ['table', 'table-bordered', 'table-hover'],
  building: [],
  sortKeys: ['firmName'],
  filter: '',

  sortedBuilding: Ember.computed.sort('model', 'sortKeys'),

  filteredBuilding: Ember.computed.filter('sortedBuilding', function(building) {
    var firmName = building.get('firmName').toLowerCase();
    return firmName.indexOf(this.get('filter')) !== -1;
  }).property('sortedBuilding', 'filter'),

  actions: {
    sortBy: function(sort) {
      this.set('sortKeys', [sort]);
    }
  }
});