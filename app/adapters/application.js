import DS from 'ember-data';
import config from 'coffee-shop-frontend/config/environment';

export default DS.RESTAdapter.extend({
  host: config.api.host,
  namespace: '/api',
});
