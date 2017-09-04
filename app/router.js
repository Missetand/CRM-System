import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('sign-in');
  this.authenticatedRoute('welcome');

  // Instadrone routes

  this.authenticatedRoute('media', function () {
    this.authenticatedRoute('new');
    this.authenticatedRoute('edit', { path: './:media_id/edit' });
  }),

    this.authenticatedRoute('photographers', function () {
     this.authenticatedRoute('new');
     this.authenticatedRoute('edit', { path: './:photographers_id/edit' });
    }),
  // End Instradrone routes
  
  // Sitemotion routes
    this.authenticatedRoute('developers', function () {
      this.authenticatedRoute('new');
      this.authenticatedRoute('edit', { path: './:developers_id/edit' });
    }),

    this.authenticatedRoute('architects', function () {
      this.authenticatedRoute('new');
      this.authenticatedRoute('edit', { path: './:architects_id/edit' });
    }),

    this.authenticatedRoute('municipality', function () {
      this.authenticatedRoute('new');
      this.authenticatedRoute('edit', { path: './:municipality_id/edit' });
    }),

    this.authenticatedRoute('building', function () {
      this.authenticatedRoute('new');
      this.authenticatedRoute('edit', { path: './:building_id/edit' });
    }),

    this.authenticatedRoute('total', function () {
      this.authenticatedRoute('new');
      this.authenticatedRoute('edit', { path: './:total_id/edit' });
    })
  // End Sitemotion routes
  this.authenticatedRoute('admin');
});

export default Router;
