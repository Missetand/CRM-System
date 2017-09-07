import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'tr',
  classNames: ['table', 'table-bordered', 'table-hover'],
  total: [],
  sortKeys: ['firmName'],
  filter: '',

  sortedTotal: Ember.computed.sort('model', 'sortKeys'),

  filteredTotal: Ember.computed.filter('sortedTotal', function(total) {
    var firmName = total.get('firmName').toLowerCase();
    return firmName.indexOf(this.get('filter')) !== -1;
  }).property('sortedTotal', 'filter'),

  actions: {
    sortBy: function(sort) {
      this.set('sortKeys', [sort]);
    }
  }
});