import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'tr',
  classNames: ['table', 'table-bordered', 'table-hover'],
  photographers: [],
  sortKeys: ['priority:desc'],
  filter: '',

  sortedPhotographers: Ember.computed.sort('model', 'sortKeys'),

  filteredPhotographers: Ember.computed.filter('sortedPhotographers', function(photographers) {
    var firmName = photographers.get('firmName').toLowerCase();
    return firmName.indexOf(this.get('filter')) !== -1;
  }).property('sortedPhotographers', 'filter'),

  actions: {
    sortBy: function(sort) {
      this.set('sortKeys', [sort]);
    }
  }
});