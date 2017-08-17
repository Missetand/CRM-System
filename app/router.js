import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sign-in');
  this.authenticatedRoute('welcome');
  
  this.authenticatedRoute('photographers', function () {
    this.authenticatedRoute('new');
    this.authenticatedRoute('edit', { path: './:photographers_id/edit' });
  })
  
});

export default Router;
