import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'tr',
  classNames: ['table', 'table-bordered', 'table-hover'],
  municipality: [],
  sortKeys: ['firmName'],
  filter: '',

  sortedMunicipality: Ember.computed.sort('model', 'sortKeys'),

  filteredMunicipality: Ember.computed.filter('sortedMunicipality', function(municipality) {
    var firmName = municipality.get('firmName').toLowerCase();
    return firmName.indexOf(this.get('filter')) !== -1;
  }).property('sortedMunicipality', 'filter'),

  actions: {
    sortBy: function(sort) {
      this.set('sortKeys', [sort]);
    }
  }
});