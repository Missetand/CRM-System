import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'tr',
  classNames: ['table', 'table-bordered', 'table-hover'],
  media: [],
  sortKeys: ['priority:desc'],
  filter: '',

  sortedMedia: Ember.computed.sort('model', 'sortKeys'),

  filteredMedia: Ember.computed.filter('sortedMedia', function(media) {
    var firmName = media.get('firmName').toLowerCase();
    return firmName.indexOf(this.get('filter')) !== -1;
  }).property('sortedMedia', 'filter'),

  actions: {
    sortBy: function(sort) {
      this.set('sortKeys', [sort]);
    }
  }
});