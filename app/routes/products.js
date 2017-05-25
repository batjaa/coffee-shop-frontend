import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // console.info('Fetching products');
    this.store.findAll('product', {}).then(function(products) {
      debugger;
    });
    return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
  },

  // setupController(controller, model) {
  //   controller.setProperties(model);
  // },
});
