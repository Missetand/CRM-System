import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'div',
  classNames: ['modal', 'fade'],

  title: 'Are you sure?',
  cancelButtonLabel: 'Cancel',
  primerButtonLabel: 'Save',

  actions: {
    primerButtonClicked() {
      this.sendAction();
    }
  }
});