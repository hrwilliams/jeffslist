import Ember from 'ember';

export default Ember.Component.extend({
  addNewCategory: false,
  actions:{

    addNewListing(){
    this.set('addNewListing', true);
  },


    saveListing1(){
      var params = {
        title: this.get('title') ? this.get('title') : "",
        content: this.get('content') ? this.get('content') : "",
        location: this.get('location') ? this.get('location') : "",
        image: this.get('image') ? this.get('image') : "",
        timePosted: moment().format('LL'),
        category: this.get('category')
      };
      this.sendAction('saveListing2', params);
      this.set('addNewListing', false);
    }



  }

});
