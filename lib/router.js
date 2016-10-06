Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'constructionView',
  waitOn: function () {
    return Meteor.subscribe('customers.public');
    return Meteor.subscribe('sessions.public');
    return Meteor.subscribe('treatments.public');
  }
});

Router.route('/customer/create', {
  name: 'customerView'
});

Router.route('/login', {
  name: 'login'
});

Router.route('/treatment/create', {
  name: 'treatmentConfig'
})

Router.route('/schedule', {
  name: 'schedule',
  waitOn: function () {
    return Meteor.subscribe('sessions.public');
  }
});

Router.route('/home', {
  name: 'welcome'
});

Router.route('/eventAdd', {
  name: 'eventAdd'
});
