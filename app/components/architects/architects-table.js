import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'tr',
  classNames: ['table', 'table-bordered', 'table-hover'],
  architects: [],
  sortKeys: ['firmName'],
  filter: '',

  sortedArchitects: Ember.computed.sort('model', 'sortKeys'),

  filteredArchitects: Ember.computed.filter('sortedArchitects', function(architects) {
    var firmName = architects.get('firmName').toLowerCase();
    return firmName.indexOf(this.get('filter')) !== -1;
  }).property('sortedArchitects', 'filter'),

  actions: {
    sortBy: function(sort) {
      this.set('sortKeys', [sort]);
    }
  }
});