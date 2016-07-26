import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.route('index', { path: '/' });
  this.route('compilation-unit', { path:'/unit/:compilation-unit_id'});
});

export default Router;
