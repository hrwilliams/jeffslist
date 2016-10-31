import Ember from 'ember';

export default Ember.Route.extend({
  sortBy: ['timePosted:desc'],
  sortedByTime: Ember.computed.sort('model.listings', 'sortBy'),
  actions:{
  saveListing3(params){
        console.log(params);
        var newListing = this.store.createRecord('listing', params);
        var category = params.category;
        category.get('listings').addObject(newListing);
        newListing.save().then(function(){
          return category.save();
        });
        this.transitionTo('category');
      }
    }
});
