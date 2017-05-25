import Ember from 'ember';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  findAll(modelName) {
    return Ember.$.getJSON(`${this.host}${this.namespace}/open/products`, data => {
      debugger;
    }).always(function() {
      debugger;
    });
  }
});
