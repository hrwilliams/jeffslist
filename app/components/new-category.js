import Ember from 'ember';

export default Ember.Component.extend({
  addNewCategory: false,
  actions:{

    addNewCategory(){
    this.set('addNewCategory', true);
  },


    saveCategory(){
      var params = {
        description: this.get('description') ? this.get('description') : ""
      };
      this.sendAction('saveCategory', params);
      this.set('addNewCategory', false);
    }



  }

});
