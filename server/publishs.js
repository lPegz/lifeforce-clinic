Meteor.publish('customers.public', function () {
  return Customers.find({}).fetch();
});

Meteor.publish('treatments.public', function () {
  return Treatments.find({}).fetch();
});

Meteor.publish('sessions.public', function () {
  return Sessions.find({}).fetch();
});

Router.configure({
  layoutTemplate: 'layout',
  waitOn: function () {
    Meteor.subscribe('customers.public');
    Meteor.subscribe('treatments.public');
    Meteor.subscribe('sessions.public');
  }
});
