import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Component.extend({
    model() {
        return RSVP.hash({
          municipality: this.get('store').findAll('municipality'),
          building: this.get('store').findAll('building')
        });
      }
    });