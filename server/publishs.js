Meteor.publish('customers.public', function () {
  return Customers.find({});
});

Meteor.publish('treatments.public', function () {
  return Treatments.find({});
});

Meteor.publish('sessions.public', function () {
  return PSessions.find({});
});

Router.configure({
  layoutTemplate: 'layout',
  waitOn: function () {
    Meteor.subscribe('customers.public');
    Meteor.subscribe('treatments.public');
    Meteor.subscribe('sessions.public');
  }
});