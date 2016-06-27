Meteor.publish('customers.public', function () {
  return Customers.find({}, {
    fields: Customers.name
  });
});
Meteor.publish('treatments.public', function () {
  return Treatments.find();
});
Meteor.publish('sessions.public', function () {
  return Sessions.find();
});

Router.configure({
  layoutTemplate: 'layout',
  waitOn: function () {
    Meteor.subscribe('customers.public');
    Meteor.subscribe('treatments.public');
    Meteor.subscribe('sessions.public');
  }
});
