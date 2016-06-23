Meteor.publish('customers', function() {
  return Customers.find();
});
Meteor.publish('treatments', function() {
  return Treatments.find();
});
Meteor.publish('sessions', function() {
  return Sessions.find();
});

Router.configure({
  layoutTemplate: 'layout',
  // subscribe to our animals publication
  // with a waitOn function in Iron Router
  // ... now our application will wait to load
  // until we've successfully subscribed to the
  // publication
  waitOn: function () {
    Meteor.subscribe('customers');
    Meteor.subscribe('treatments');
    Meteor.subscribe('sessions');
  }
});
Router.route('/api/customers', {
  name: 'customers'
});

Router.route('/api/treatments', {
  name: 'treatments'
});

Router.route('/api/sessions', {
  name: 'sessions'
});
