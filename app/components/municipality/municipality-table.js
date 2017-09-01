import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'tr',
  classNames: ['table', 'table-bordered', 'table-hover'],
  sortedTables: Ember.computed.sort('model', 'sortDefinition'),
  sortBy: 'firmName',
  reverseSort: false,
  sortDefinition: Ember.computed.sort('reverseSort', function() {
    let sortOrder = this.get('reverseSort') ? 'desc' : 'asc';
    return [ `${this.get('sortBy')}:${sortOrder}` ];
  })

});