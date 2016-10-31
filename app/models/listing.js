import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  timePosted: DS.attr(),
  content: DS.attr(),
  location: DS.attr(),
  image: DS.attr()
  category: DS.belongsTo('category', { async: true }),
});
