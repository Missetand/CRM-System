import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'tr',
  classNames: ['table', 'table-bordered', 'table-hover'],
  developer: [],
  sortKeys: ['firmName'],
  filter: '',

  sortedDeveloper: Ember.computed.sort('model', 'sortKeys'),

  filteredDeveloper: Ember.computed.filter('sortedDeveloper', function(developer) {
    var firmName = developer.get('firmName').toLowerCase();
    return firmName.indexOf(this.get('filter')) !== -1;
  }).property('sortedDeveloper', 'filter'),

  actions: {
    sortBy: function(sort) {
      this.set('sortKeys', [sort]);
    }
  }
});